// Video generation functionality for achievements
class AchievementVideo {
    constructor() {
        this.achievements = [];
        this.canvas = null;
        this.ctx = null;
    }

    // Add an achievement to the video
    addAchievement(title, description, timestamp = new Date()) {
        this.achievements.push({
            title: title,
            description: description,
            timestamp: timestamp,
            id: this.achievements.length + 1
        });
    }

    // Initialize video canvas
    initCanvas(canvasId, width = 800, height = 600) {
        if (typeof document !== 'undefined') {
            this.canvas = document.getElementById(canvasId);
            if (this.canvas) {
                this.canvas.width = width;
                this.canvas.height = height;
                this.ctx = this.canvas.getContext('2d');
                return true;
            }
        }
        return false;
    }

    // Generate video frame for achievement
    generateAchievementFrame(achievement, frameNumber = 0) {
        if (!this.ctx) return null;

        // Clear canvas
        this.ctx.fillStyle = '#1a1a2e';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw achievement badge
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;

        // Animated glow effect
        const glowSize = 100 + Math.sin(frameNumber * 0.1) * 20;
        const gradient = this.ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, glowSize);
        gradient.addColorStop(0, 'rgba(255, 215, 0, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw achievement circle
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#ffd700';
        this.ctx.fill();
        this.ctx.strokeStyle = '#ffed4e';
        this.ctx.lineWidth = 4;
        this.ctx.stroke();

        // Draw achievement text
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = 'bold 24px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('🏆', centerX, centerY + 8);

        // Draw title
        this.ctx.font = 'bold 32px Arial';
        this.ctx.fillText(achievement.title, centerX, centerY + 140);

        // Draw description
        this.ctx.font = '18px Arial';
        this.ctx.fillStyle = '#cccccc';
        this.ctx.fillText(achievement.description, centerX, centerY + 170);

        // Draw timestamp
        this.ctx.font = '14px Arial';
        this.ctx.fillStyle = '#888888';
        this.ctx.fillText(achievement.timestamp.toLocaleDateString(), centerX, centerY + 200);

        return this.canvas.toDataURL();
    }

    // Generate video sequence
    generateVideoSequence(duration = 3000) {
        const frames = [];
        const fps = 30;
        const totalFrames = Math.floor(duration / 1000 * fps);

        for (let i = 0; i < this.achievements.length; i++) {
            for (let frame = 0; frame < totalFrames; frame++) {
                const frameData = this.generateAchievementFrame(this.achievements[i], frame);
                if (frameData) {
                    frames.push(frameData);
                }
            }
        }

        return frames;
    }

    // Export achievement data
    exportAchievements() {
        return {
            achievements: this.achievements,
            totalCount: this.achievements.length,
            generatedAt: new Date()
        };
    }

    // Load achievement data
    loadAchievements(data) {
        if (data && data.achievements) {
            this.achievements = data.achievements.map(achievement => ({
                ...achievement,
                timestamp: new Date(achievement.timestamp)
            }));
        }
    }
}

// Export for Node.js if available
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AchievementVideo;
}

// Global variable for browser usage
if (typeof window !== 'undefined') {
    window.AchievementVideo = AchievementVideo;
}
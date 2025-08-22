var list = [];

list.sort(function (a, b) {
return ('' + a.attr).localeCompare(b.attr);
})

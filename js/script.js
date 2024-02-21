    var collapseList = [].slice.call(document.querySelectorAll('.collapse'));
    var collapseShown = null;

    collapseList.forEach(function (collapse) {
        collapse.addEventListener('show.bs.collapse', function () {
            if (collapseShown && collapseShown !== collapse) {
                collapseShown.classList.remove('show');
            }
            collapseShown = collapse;
        });
    });




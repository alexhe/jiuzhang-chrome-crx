function addUnlockButton(lockIcons) {
    lockIcons.each(function() {
        try {
            var uniqueName = $(this).parent().siblings('a').attr('href').slice(10);
        } catch (error) {
            return;
        }
        var button='<a class="free-unlock-btn" href="//lintcode.com/problem/'+ uniqueName +'">' + '<span class="label label-success" style="margin-left: 5px">免费解锁</span>';
        var parentElement = $(this).parent();
        if(parentElement.children('.free-unlock-btn').length == 0) {
            parentElement.append(button);
        }     
    });
}

function listenList() {
    $('.question-list-table').bind('DOMNodeInserted', function(){
        var lockIcons = $('span[data-toggle="tooltip"]');
        if(lockIcons.length) {
            $('.question-list-table').unbind('DOMNodeInserted');
            addUnlockButton(lockIcons);
            listenList();
        }
    });
}

$('body').bind('DOMNodeInserted', function(){
    var lockIcons = $('span[data-toggle="tooltip"]');
    if(lockIcons.length) {
        $('body').unbind('DOMNodeInserted');
        listenList();
    }
});

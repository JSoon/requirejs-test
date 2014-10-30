define(function (require) {
    require('jquery.crop');

    $('#cropBox').Jcrop({
        aspectRatio: 1,
        minSize: [64, 64],
        maxSize: [128, 128],
        onSelect: updateCoords
    });

    $('#cropBoxForm').on('submit', checkCoords);

    function updateCoords(c) {
        $('#x').val(c.x);
        $('#y').val(c.y);
        $('#w').val(c.w);
        $('#h').val(c.h);
    }

    function checkCoords() {
        if (parseInt($('#w').val())) {
            return true;
        }
        alert('Please select a crop region then press submit.');
        return false;
    }
});
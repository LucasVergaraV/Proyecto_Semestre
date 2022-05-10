function iniciarMap(){
    var coord = {lat:-33.02492036817776 ,lng:-71.55994484347784};
    var map = new google.maps.Map(document.getElementById('map'),
        {zoom: 17,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}
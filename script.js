window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.874559295845344, lng: 151.20116821769474 },
    zoom: 18,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
    });

    const malls = [
    { label: "C", name: "아쿠아리움", lat: -33.86991057722869, lng: 151.20208377861343 },
    { label: "G", name: "울루물루", lat: -33.87247077823744, lng: 151.21854192029565 },
    { label: "D", name: "시드니오페라하우스", lat: -33.85662385422225, lng: 151.21538104887708 },
    { label: "L", name: "포츠포인트", lat: -33.868255407345686, lng: 151.22244255861443 },
    { label: "M", name: "달링허스트", lat: -33.87920820187083, lng: 151.22016482382057 },
    { label: "T", name: "피어몬트", lat: -33.87140743484865, lng: 151.1946352135705 }
    ];

    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();

    malls.forEach(({ label, name, lat, lng }) => {
    const marker = new google.maps.Marker({
        position: { lat, lng },
        label,
        map
    });
    bounds.extend(marker.position);

    marker.addListener("click", () => {
        map.panTo(marker.position);
        infoWindow.setContent(name);
        infoWindow.open({
        anchor: marker,
        map
        });
    });
    });

    map.fitBounds(bounds);
};
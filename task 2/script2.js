document.addEventListener('DOMContentLoaded', function() {
    var devices = document.querySelectorAll('.device');
    devices.forEach(function(device) {
        device.addEventListener('click', function() {
            var deviceId = this.id;
            var deviceInfo = getDeviceInfo(deviceId);
            openDeviceInfo(deviceInfo);
        });
    });
});

function getDeviceInfo(deviceId) {
    switch (deviceId) {
        case 'mobilePhone':
            return "Mobile Phone: This is a portable communication device that allows users to make phone calls, send text messages, browse the internet, and run various applications.";
        case 'laptop':
            return "Laptop: A laptop is a portable computer that is designed to be used on the go. It typically features a keyboard, screen, and trackpad or mouse, and can run various software applications.";
        case 'desktop':
            return "Desktop: A desktop computer is a personal computer designed for use at a single location, typically a desk or table. It consists of a computer case that houses the motherboard, CPU, memory, storage, and other components.";
        default:
            return "Device information not available.";
    }
}

function openDeviceInfo(deviceInfo) {
    var newWindow = window.open('', '_blank');
    newWindow.document.write('<html><head><title>Device Information</title></head><body style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px;"><h1 style="color: #333; text-align: center;">Device Information</h1><p style="color: #333; font-size: 18px; text-align: center;">' + deviceInfo + '</p></body></html>');
    newWindow.document.close();
}

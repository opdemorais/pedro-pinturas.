function contatoWhatsApp(message) {
    const phoneNumber = '5575983164956'; // Substitua pelo número do Pedro Pinturas
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

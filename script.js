document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else {
            emailjs.send('service_8b3bcha', 'template_3gos0ge', {
                from_name: name,
                from_email: email,
                message: message
            }, 'RdKc_QmXB83m4eBbX')
            .then(function(response) {
                alert('Your message has been sent!');
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.error('Failed to send email:', error);
                alert('Failed to send your message. Please try again later.');
            });
        }
    });

    // إضافة التنقل بالضغط على الأزرار
    document.querySelectorAll('.navigate-btn').forEach(button => {
        button.addEventListener('click', function() {
            const target = document.querySelector(this.getAttribute('data-target'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

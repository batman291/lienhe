<div class='gia-huy-net' id='ContactForm1'>
<form name='ContactForm'>
<div class='gh-dt-inp icon-user'>
<input id='ContactForm1_contact-form-name' name='name' placeholder='Tên' type='text'/>
<label>Tên</label>
</div>
<div class='gh-dt-inp icon-email'>
<input id='ContactForm1_contact-form-email' name='email' placeholder='Email' type='text'/>
<label>Email</label>
</div>
<div class='gh-dt-inp icon-msg'>
<textarea id='ContactForm1_contact-form-email-message' name='message' placeholder='Nội dung' rows='3'></textarea>
<label>Nội dung</label>
</div>
<div class='gh-dt-inp outset'>
<input id='ContactForm1_contact-form-submit' type='button' value='Submit'/>
</div>
<div class='gh-knt-notif'>
<div id='ContactForm1_contact-form-error-message'></div>
<div id='ContactForm1_contact-form-success-message'></div>
</div>
</form>
</div>

<script>

if (typeof(BLOG_attachCsiOnload) != 'undefined' && BLOG_attachCsiOnload != null) {
    window['blogger_templates_experiment_id'] = 'templatesV1';
    window['blogger_blog_id'] = '0000000000000000000';
    BLOG_attachCsiOnload('');
}
_WidgetManager._Init('//www.blogger.com/rearrange?blogID\0000000000000000000', '//www.giahuy.net/', '0000000000000000000');
_WidgetManager._RegisterWidget('_ContactFormView', new _WidgetInfo('ContactForm1', 'footer1', null, document.getElementById('ContactForm1'), {
    'contactFormMessageSendingMsg': 'Gửi...',
    'contactFormMessageSentMsg': 'Tin nhắn của bạn đã được gửi..',
    'contactFormMessageNotSentMsg': 'Không thể gửi tin nhắn. Vui lòng thử lại sau.',
    'contactFormInvalidEmailMsg': 'Một địa chỉ email hợp lệ.',
    'contactFormEmptyMessageMsg': 'Trường tin nhắn không được để trống.',
    'title': 'Contact Form',
    'blogId': '0000000000000000000',
    'contactFormNameMsg': 'Name',
    'contactFormEmailMsg': 'Email',
    'contactFormMessageMsg': 'Message',
    'contactFormSendMsg': 'Send',
    'submitUrl': 'https://www.blogger.com/contact-form.do'
}, 'displayModeFull'));
  
var inputs = document.querySelectorAll('.gh-dt-inp input[type=text], .gh-dt-inp input[type=email], .gh-dt-inp textarea');
for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    input.addEventListener('input', function() {
        var bg = this.value ? 'show' : 'none';
        this.setAttribute('class', bg);
    });
}
</script>

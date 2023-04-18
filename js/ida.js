$(function () {
    csmapi.set_endpoint ('https://2.iottalk.tw');
    var profile = {
        'dm_name': 'Remote_control',
        'idf_list': [Keypad1],
        'odf_list': [],
    }
    
    function Keypad1(){

    }

    function ida_init () {
        $('font')[0].innerText = profile.d_name;
    }

    var ida = {
        'ida_init': ida_init,
    };

    dai(profile, ida);
});

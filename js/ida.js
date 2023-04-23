$(function () {
    csmapi.set_endpoint ('https://6.iottalk.tw');
    var profile = {
        'dm_name': 'dacall_test',
        'idf_list': [aud_test],
        'odf_list': [],
    }
    
    function aud_test(){
        return 0;
    }

    function ida_init () {
        $('font')[0].innerText = profile.d_name;
    }

    var ida = {
        'ida_init': ida_init,
    };

    dai(profile, ida);
});

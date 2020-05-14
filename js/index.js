function init() {

}

function ChangeOutside() {
    if ($('#ChangeWeb').val() == '外网环境') {
        $('#linkC6').attr('href', 'http://work.shglgf.com:8090/C6');
        $('#linkEdoc2').attr('href', 'http://work.shglgf.com:8060');
        //$('#linkU8').attr('href','http://work.shglgf.com:8110');
        $('#linkYcjk').attr('href', 'http://work.shglgf.com:6080');
        $('#linkFw').attr('href', 'http://work.shglgf.com:8010');
        $('#linkZabbix').attr('href', 'http://work.shglgf.com:8110');
        //$('#linkGogs').attr('href','http://work.shglgf.com:8110');
        //$('#linkVM').attr('href','http://work.shglgf.com:8110');
        //$('#linkSangfor').attr('href','http://work.shglgf.com:8110');
        $('#linkHuawei').attr('href', 'http://work.shglgf.com');
    }
    else{
        $('#linkC6').attr('href', 'http://192.168.1.49:8090/C6');
        $('#linkEdoc2').attr('href', 'http://192.168.1.17');
        //$('#linkU8').attr('href','http://work.shglgf.com:8110');
        $('#linkYcjk').attr('href', 'http://10.1.12.110:8081/');
        $('#linkDxs').attr('href', 'http://192.168.1.20');
        $('#linkFw').attr('href', 'http://192.168.1.12:8010');
        $('#linkZabbix').attr('href', 'http://192.168.1.24');
        //$('#linkGogs').attr('href','http://work.shglgf.com:8110');
        //$('#linkVM').attr('href','http://work.shglgf.com:8110');
        //$('#linkSangfor').attr('href','http://work.shglgf.com:8110');
        $('#linkHuawei').attr('href', 'http://10.0.0.1');
    }
}


function init() {

}

function keyup_submit(e) {
    var evt = window.event || e;
    if (evt.keyCode == 13) {
        //回车事件
        CheckPwd();
    }
}

function CheckPwd() {
    //$('#pwdShow').val(md5($('#pwd').val()));
    $('#SystemDiv').hide();
    if ($('#pwd').val() != "") {
        if (md5($('#pwd').val()) == '7cb6382c679b8e729f4d23a43521451e') {
            $('#SystemDiv').show();
        }
        else {
            alert("密码不正确！");
        }
    }
    $('#pwd').val("");
}

function ChangeOutside() {
    if ($('#ChangeWeb').val() == '外网环境') {
        //金和C6
        $('#linkC6').attr('href', 'http://work.shglgf.com:8090/C6');

        //Edoc2
        $('#linkEdoc2').attr('href', 'http://work.shglgf.com:8060');

        //U8
        //$('#linkU8').attr('href','http://work.shglgf.com:8110');

        //远程监控
        $('#linkYcjk').attr('href', 'http://work.shglgf.com:6080');

        //云桌面客户端
        $('#linkDesk').attr('href', 'https://work.shglgf.com:334');

        //监测监护
        $('#linkJc').attr('href', 'http://work.shglgf.com:8824/SHGL/admin/index.html');

        //泛微OA
        $('#linkFw').attr('href', 'http://work.shglgf.com:8010');

        //Zabbix
        $('#linkZabbix').attr('href', 'http://work.shglgf.com:8110');

        //Gogs代码管理
        $('#linkGogs').attr('href', 'http://work.shglgf.com:10080');

        //VM服务器后台
        //$('#linkVM').attr('href','https://work.shglgf.com:8110');

        //云桌面后台
        //$('#linkSangfor').attr('href','https://work.shglgf.com:8110');

        //华为行为管理器
        $('#linkHuawei').attr('href', 'https://10.0.0.1');

        //SeafilePro
        $('#linkSeafile').attr('href', 'http://work.shglgf.com:7070');

        //FTP
        $('#linkFtp').attr('href', 'http://work.shglgf.com:8023/');

        //Hrc
        $('#linkHrc').attr('href', 'http://work.shglgf.com:9336/gl');
    }
    else {
        //金和C6
        $('#linkC6').attr('href', 'http://192.168.1.49:8090/C6');

        //Edoc2
        $('#linkEdoc2').attr('href', 'http://192.168.1.17');

        //U8
        //$('#linkU8').attr('href','http://work.shglgf.com:8110');

        //远程监控
        $('#linkYcjk').attr('href', 'http://10.1.12.110:8081/');

        //地下水监控平台
        $('#linkDxs').attr('href', 'http://192.168.1.20');

        //云桌面客户端
        $('#linkDesk').attr('href', 'https://work.shglgf.com:334');

        //监测监护
        $('#linkJc').attr('href', 'http://192.168.1.29:8080//SHGL/admin/index.html');

        //泛微OA
        $('#linkFw').attr('href', 'http://192.168.1.12:8010');

        //Zabbix
        $('#linkZabbix').attr('href', 'http://192.168.1.24');

        //Gogs代码管理
        $('#linkGogs').attr('href', 'http://192.168.1.22:10080');

        //VM服务器后台
        //$('#linkVM').attr('href','https://work.shglgf.com:8110');

        //云桌面后台
        //$('#linkSangfor').attr('href','https://work.shglgf.com:8110');

        //华为行为管理器
        $('#linkHuawei').attr('href', 'https://10.0.0.1:8443/');

        //SeafilePro
        $('#linkSeafile').attr('href', 'http://192.168.1.22:8001');

        //FTP
        $('#linkFtp').attr('href', 'http://192.168.1.9');

        //Hrc
        $('#linkHrc').attr('href', 'http://192.168.1.19:9336/gl');
    }
}


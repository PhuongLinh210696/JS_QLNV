var arrNhanVien=[];

document.getElementById("btnThemNV").onclick = function() {themNhanVien()};

function themNhanVien() {
    var nhanVien = layGiaTriInput();
    console.log(nhanVien)
    if (nhanVien) {
        arrNhanVien.push(nhanVien)
        renderData();
        ganGiaTriChoInput("","","","","","","","");
    }
}

function xoaNhanVien(taiKhoan){
    // document.getElementById("btnCapNhatSV").style.display = "none";
    var index = timViTriNhanVien(taiKhoan);
    if(index != -1){
        arrNhanVien.splice(index,1);
        renderData();
    }
    console.log(arrNhanVien)
}

function suaNhanVien(taiKhoan){
    // document.getElementById("btnCapNhatSV").style.display = "inline-block";
    var index = timViTriNhanVien(taiKhoan);
    var nhanVien = arrNhanVien[index];
    ganGiaTriChoInput(
        nhanVien.taiKhoan,
        nhanVien.hoTen,
        nhanVien.email,
        nhanVien.matKhau,
        nhanVien.ngayLam,
        nhanVien.luongCoBan,
        nhanVien.ChucVu,
        nhanVien.gioLam
    );
    document.getElementById("tknv").readOnly = true;
}

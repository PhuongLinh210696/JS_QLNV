function layGiaTriInput() {
    var taiKhoan = document.getElementById("tknv").value;
    var hoTen = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCoBan = document.getElementById("luongCB").value * 1;
    var chucVu = document.getElementById("chucvu").value * 1;
    var gioLam = document.getElementById("gioLam").value * 1;

    var nhanVien = new NhanVien(
        taiKhoan,
        hoTen,
        email,
        matKhau,
        ngayLam,
        luongCoBan,
        chucVu,
        gioLam
    )
    return nhanVien;
}
function ganGiaTriChoInput(taiKhoan,hoTen,email,matKhau,ngayLam,luongCoBan,chucVu,gioLam) {
    document.getElementById("tknv").value = taiKhoan;
    document.getElementById("name").value = hoTen;
    document.getElementById("email").value = email;
    document.getElementById("password").value = matKhau;
    document.getElementById("datepicker").value = ngayLam;
    document.getElementById("luongCB").value  = luongCoBan;
    document.getElementById("chucvu").value  = chucVu;
    document.getElementById("gioLam").value  = gioLam;
}

function renderData() {
    var content ="";
    for (let i = 0; i < arrNhanVien.length; i++) {
        var nhanVien = new NhanVien();
        console.log(nhanVien)
        const element = arrNhanVien[i];
        console.log(element)
        Object.assign(nhanVien,element);
        var tongLuong = nhanVien.tinhTongLuong();
        var xepLoai = nhanVien.xepLoai();
        // console.log(tongLuong)
        content+=
        `<tr>
            <td id="toCheck">${nhanVien.taiKhoan}</td>
            <td>${nhanVien.hoTen}</td>
            <td>${nhanVien.email}</td>
            <td>${nhanVien.ngayLam}</td>
            <td>${nhanVien.chucVu}</td>
            <td>${tongLuong}</td>
            <td>${xepLoai}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaNhanVien('${nhanVien.taiKhoan}')"><i class="fa-solid fa-trash-can"></i></button>
                <button class="btn btn-warning" onclick="suaNhanVien('${nhanVien.taiKhoan}')"><i class="fa-solid fa-pen-to-square"></i></button>
            </td>
        </tr>`
    }
    document.getElementById("tableDanhSach").innerHTML = content;
}

function timViTriNhanVien(taiKhoan) {
    //Nên kiểm tra dữ liệu ở phía BE và FE
    var viTri = -1;
    arrNhanVien.forEach(function (item,index) {
        if(item.taiKhoan == taiKhoan){
            viTri = index;
        }
    });
    return viTri;
}


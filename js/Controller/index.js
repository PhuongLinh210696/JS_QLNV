var arrNhanVien=[];

document.getElementById("btnThemNV").onclick = function() {themNhanVien()};
document.getElementById("btnCapNhat").onclick = function() {capNhatNhanVien()};
document.getElementById("btnDong").onclick = function () {dongModal()}
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
    $('#myModal').modal('show');
    myModal = document.getElementById("myModal")
    alert('hello')
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

function capNhatNhanVien() {
    var nhanVienDaChinhSua = layGiaTriInput();
    var index = timViTriNhanVien(nhanVienDaChinhSua.taiKhoan)
    // var capNhatSinhVien = ganGiaTriChoInput(sinhVien2.maSV,"","","","","","","","")
    console.log(index)
    arrNhanVien[index] = nhanVienDaChinhSua;
    console.log(arrNhanVien)
    renderData()
    ganGiaTriChoInput("","","","","","","","","");
    document.getElementById("tknv").readOnly = false;
    // console.log(capNhatSinhVien)
    $('#myModal').modal('hide');
}

function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchName");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[6];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
    }
}

function dongModal() {
    resetDisplay();
}
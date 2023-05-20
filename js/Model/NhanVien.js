function NhanVien(_taiKhoan,_hoTen,_email,_matKhau,_ngayLam,_luongCoBan,_chucVu,_gioLam) {
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau =  _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tinhTongLuong = function(){
        if (this.chucVu == 1) {
            return (this.luongCoBan *3)
        } else {
            if (this.chucVu == 2) {
                return (this.luongCoBan *2)
            } else {
                return (this.luongCoBan * 1)
            }
        }
    };
    this.xepLoai = function () {
        if(this.gioLam <160){
            return "Trung Bình"
        }else{
            if (this.gioLam<176) {
                return "Khá"
            }else{
                if (this.gioLam<192) {
                    return "Giỏi"
                }else{
                    return "Xuất sắc"
                }
            }
        }
    };
}
function NhanVien(taiKhoan,hoTen,email,matKhau,ngayLam,luongCB,chucVu,gioLam){
    // properties
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
   
    //Method
    this.tinhLuong = function (){
        if(chucVu == "Sếp"){
            return this.tongLuong = luongCB *3
        }
        if(chucVu == "Trưởng phòng"){
            return this.tongLuong = luongCB *2;
        }
        if(chucVu == "Nhân viên"){
            return this.tongLuong = luongCB *1;
        }
    };
    this.xepLoai = function (){
        if(gioLam > 0 && gioLam >= 192){
           return this.xepLoai = "Xuất sắc";
        }
        if(gioLam >= 176 && gioLam < 192) {
            return this.xepLoai = "Giỏi";
        }
        if(gioLam >= 160 && gioLam < 176){
            return this.xepLoai = "Khá";
        }
         if(gioLam < 160){
            return this.xepLoai = "TB";
        }
       
    }
}
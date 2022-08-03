function DanhSachNhanVien(){
    this.mangNV = [];

    this.themNV = function(nv){
        this.mangNV.push(nv)
    }
    this.timViTri = function(tKhoan){
        var viTri = -1;
        this.mangNV.map(function (nv,index){
            if(nv.taiKhoan === tKhoan){
                viTri = index;
            }
        });
        return viTri;
    }
    this.xoaNV = function(tKhoan) {
        var viTri = this.timViTri(tKhoan);
        if(viTri > -1){
            this.mangNV.splice(viTri,1);
        }
    }
    this.capNhatNV = function(nv){
        var viTri = this.timViTri(nv.taiKhoan);
        if(viTri > -1){
            dsnv.mangNV[viTri] = nv;
        }
    }
    
}
DanhSachNhanVien.prototype.timKiem = function(tuKhoa) {
    var mangTK =[];
    this.mangNV.map(function(nv){
        var viTri = nv.xepLoai.toLowerCase().indexOf(tuKhoa.toLowerCase());
        if(viTri > -1){
            mangTK.push(nv);
        }
    });
    return mangTK;
}
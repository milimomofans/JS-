(function(){
    var linkage = function(Province,City,Area){
        //获取所有地区信息
        this.provinceList = provinceList 
        
        this.Province = document.getElementById(Province)
        this.City = document.getElementById(City)
        this.Area = document.getElementById(Area)


        this.ProIndex = 0 
        
        this.value = null

        this.resetProvince()
        this.ProvinceChange()
        this.CityChange()
        this.AreaChange

    }
    
    //获取省份信息
    linkage.prototype.resetProvince = function(){
        //匿名函数this丢失 所以使用箭头函数
        this.provinceList.map((item)=>{     
            var o = document.createElement('option')
            o.value = item.name
            o.innerText = item.name
            this.Province.add(o)
            
        })
   
    }

    //省份信息改变时更换市区信息
    linkage.prototype.ProvinceChange=function(){
        this.Province.onchange=()=>{
            this.City.innerHTML = ''
            this.Area.innerHTML = ''
            this.ProIndex = this.Province.selectedIndex
            
            this.provinceList[this.ProIndex].cityList.map((item)=>{
                var o =document.createElement('option')
                o.value = item.name
                o.innerText = item.name
                this.City.add(o)
            }) 
        }  
    }

    //市改变更换区信息
    linkage.prototype.CityChange = function(){
        this.City.onchange=()=>{
            this.Area.innerHTML = ''
            var index = this.City.selectedIndex

            this.provinceList[this.ProIndex].cityList[index].areaList.map((item)=>{
                var o =document.createElement('option')
                o.value = item
                o.innerText = item
                this.Area.add(o)
            })
        }
    }

    

    this.linkage = linkage
})()
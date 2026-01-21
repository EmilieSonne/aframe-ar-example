AFRAME.registerComponent('put-snowman', {
    init: function(){
        debugger;
        let el = this.el; 

        this.addSnowman = function(e){
            debugger;
            print(e);
            debugger;
        }

        this.el.addEventListener('click', this.addSnowman);
    }

})
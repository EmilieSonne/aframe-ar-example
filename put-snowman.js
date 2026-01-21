AFRAME.registerComponent('put-snowman', {
    init: function(){
        let el = this.el; 

        this.addSnowman = function(e){
            print(e);
            debugger;
        }

        this.el.addEventListener('click', this.addSnowman);
    }

})
AFRAME.registerComponent('put-snowman', {
    init: function(){
        debugger;
        let el = this.el; 

        this.addSnowman = function(e){
            debugger;
            console.log(e);
            debugger;
        }

        this.el.addEventListener('click', this.addSnowman);
    }

})
AFRAME.registerComponent('put-snowman', {
    init: function(){
        debugger;
        let el = this.el; 

        this.addSnowman = function(e){
            debugger;
            let p = e.detail.intersection.point;
            let scene = document.querySelector('a-scene');

            let snowman = document.createElement('a-entity');
            snowman.setAttribute('geometry', 'primitive: sphere');
            snowman.setAttribute('material', 'color: white');
            snowman.setAttribute('scale', '1 1 1')
            snowman.setAttribute('position', p);
            scene.appendChild(snowman);
        }

        this.el.addEventListener('click', this.addSnowman);
    }

})
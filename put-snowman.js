AFRAME.registerComponent('put-snowman', {
    init: function(){
        debugger;
        let el = this.el; 

        this.addSnowman = function(e){
            debugger;
            let p = e.detail.intersection.point;
            let scene = document.querySelector('a-scene');
            let snowman = document.createElement('a-entity');
            let bottomball = document.createElement('a-sphere');
            // position="0 1.25 -1" radius="1.25" color="blue"
            bottomball.setAttribute('position', p);
            bottomball.setAttribute('radius', '1.25');
            bottomball.setAttribute('color', 'white');


            //snowman.setAttribute('geometry', 'primitive: sphere');
            //snowman.setAttribute('material', 'color: white');
            //snowman.setAttribute('scale', '1 1 1')
            //snowman.setAttribute('position', p);
            snowman.setAttribute('shadow', {});
            snowman.appendChild(botttomball);
            
            scene.appendChild(snowman);
        }

        this.el.addEventListener('click', this.addSnowman);
    }

})
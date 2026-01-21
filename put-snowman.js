AFRAME.registerComponent('put-snowman', {
    init: function(){
        debugger;
        let el = this.el; 

        this.addSnowman = function(e){
            debugger;
            let p = e.detail.intersection.point;
            let r = 0.5; 
            let scene = document.querySelector('a-scene');
            let snowman = document.createElement('a-entity');
            //let bottomball = document.createElement('a-sphere');

            //bottomball.setAttribute('position', p);
            //bottomball.setAttribute('radius', '1.25');
            //bottomball.setAttribute('material', 'color: white');


            snowman.setAttribute('geometry', 'primitive: sphere');
            snowman.setAttribute('material', 'color: white');
            snowman.setAttribute('radius', r)
            snowman.setAttribute('scale', '0.2 0.2 0.2');
            p.y += r;
            snowman.setAttribute('position', p);
            snowman.setAttribute('shadow', {});
            //snowman.appendChild(bottomball);

            scene.appendChild(snowman);
        }

        this.el.addEventListener('click', this.addSnowman);
    }

})
AFRAME.registerComponent('put-snowman', {
    init: function(){
        debugger; 
        let el = this.el; 

        this.addSnowman = function(e){
            let p = e.detail.intersection.point;
            console.log(p);
            let scene = document.querySelector('a-scene');
            let snowman = document.createElement('a-entity');
            snowman.setAttribute('geometry', 'primitive: sphere');
            snowman.setAttribute('material', 'color: white');
            snowman.setAttribute('scale', '0.2 0.2 0.2');
            snowman.setAttribute('position', p);
            snowman.setAttribute('shadow', {});

            let snowman_top = document.createElement('a-entity');
            snowman_top.setAttribute('geometry', 'primitive: sphere');
            snowman_top.setAttribute('material', 'color: white');
            snowman_top.setAttribute('scale', '0.15 0.15 0.15');
            p.y += 0.3;
            snowman_top.setAttribute('position', p);
            // snowman_top.setAttribute('shadow', {});

            scene.appendChild(snowman);
            scene.appendChild(snowman_top);
        }

        this.addPinetree = function(e){
            let p = e.detail.intersection.point;
            console.log(p);
            let scene = document.querySelector('a-scene');
            let pinetree = document.createElement('a-entity');
            pinetree.setAttribute('geometry', 'primitive: cone');
            pinetree.setAttribute('material', 'color: green');
            pinetree.setAttribute('scale', '0.2 0.5 0.2');
            pinetree.setAttribute('position', p);
            pinetree.setAttribute('shadow', {});

            scene.appendChild(pinetree);
        }

        this.addSnowmanOrPinetree = function(e){
            let x = Math.random();
            if (x < 0.7){
                this.addPinetree(e);
            }
            else {
                this.addSnowman(e);
            }
        }

        this.el.addEventListener('click', this.addSnowmanOrPinetree);
    }

})
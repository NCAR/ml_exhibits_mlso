(function () {
    'use strict';
    angular.module('edu.ucar.scied.mlso.controller', [])
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$routeParams', '$route', '$scope', '$interval', 'WebApp'];
    function homeCtrl($routeParams, $route, $scope, $interval,WebApp) {
        WebApp.setShowFooter(false);        
        WebApp.setBodyLayout('home');  
        WebApp.setDataSource('data/content.json');

        $scope.image = 'litebox_cme_848x750.jpg';
        
        var a_images = ['litebox_cme_848x750.jpg',
                       'litebox_magnetosphere.jpg',
                       'litebox_prominence_1000x720.jpg',
                       'litebox_aurora_933x700.jpg'];
        
        
        var interval;
        var counter = 0;
        
        interval = $interval(function(){
            $scope.image = a_images[counter];
            counter++;
            if(counter > a_images.length - 1){
                counter = 0;
            }
            
        },1000);
        
        $scope.txt = '<p>The spectacular explosions known as Coronal Mass Ejections (CMEs) are not only fascinating, but important in our understanding of how changes in the Sun affect Earth.  The story begins in the solar interior, where turbulent plasma motions create powerful magnetic fields.  When these fields rise and pass through the solar surface we see them as sunspots and glowing loops in the sun\'s outer atmosphere, called the corona.  CMEs occur when this pent up magnetic energy is suddenly and violently set free, launching a clump of matter (mostly electrons and protons, under the influence of magnetism) into space with an explosive power equivalent to hundreds of millions of the most powerful nuclear weapons.  These eruptions occur daily during periods of high magnetic activity. Some strike the Earth, traveling the 93 million miles (150 million km) in just a few days.  The image here tracks the development of a CME by combining observations from three different solar telescopes. By combining the images we can see the CME stretching from the solar surface through the extended corona.</p><p>The spectacular explosions known as Coronal Mass Ejections (CMEs) are not only fascinating, but important in our understanding of how changes in the Sun affect Earth.  The story begins in the solar interior, where turbulent plasma motions create powerful magnetic fields.  When these fields rise and pass through the solar surface we see them as sunspots and glowing loops in the sun\'s outer atmosphere, called the corona.  CMEs occur when this pent up magnetic energy is suddenly and violently set free, launching a clump of matter (mostly electrons and protons, under the influence of magnetism) into space with an explosive power equivalent to hundreds of millions of the most powerful nuclear weapons.  These eruptions occur daily during periods of high magnetic activity. Some strike the Earth, traveling the 93 million miles (150 million km) in just a few days.  The image here tracks the development of a CME by combining observations from three different solar telescopes. By combining the images we can see the CME stretching from the solar surface through the extended corona.</p><p>The spectacular explosions known as Coronal Mass Ejections (CMEs) are not only fascinating, but important in our understanding of how changes in the Sun affect Earth.  The story begins in the solar interior, where turbulent plasma motions create powerful magnetic fields.  When these fields rise and pass through the solar surface we see them as sunspots and glowing loops in the sun\'s outer atmosphere, called the corona.  CMEs occur when this pent up magnetic energy is suddenly and violently set free, launching a clump of matter, which are mostly electrons and protons.</p>';
    }

  
})();
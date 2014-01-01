'use strict';
var cvApp = angular.module('CvApp', []);

function CvCtrl($scope) {
    $scope.knownLanguages = [
        {name: {en : 'English',
                fr : 'Anglais'},
         desc: {en : 'Read, writen, spoken - European Level B2',
                fr : 'Lu, écrit, parlé - Niveau européen B2'},
         level: 3},
        {name: {en : 'Spanish',
                fr : 'Espagnol'},
         desc: {en : 'Read, writen, spoken - European Level B2',
                fr : 'Lu, écrit, parlé - Niveau européen B2'},
         level: 2},
        {name: {en : 'German',
                fr : 'Allemand'},
         desc: {en : 'Introduction class (6 mois)',
                fr : 'Initiation (6 mois)'},
         level : 1},
        {name: {en : 'Chinese',
                fr : 'Chinois'},
         desc: {en : 'Introduction class (6 mois)',
                fr : 'Initiation (6 mois)'},
         level : 1},
    ];

    $scope.skillsList = [
        {name: {en : 'Python'},
         desc: {en : 'Deep knowledge, used in a lot of projects.',
                fr : 'Très bonne connaissance, utilisé dans de nombreux projets'},
         level: 4},
        {name: {en : 'Php'},
         desc: {en : 'Creation or maintenance of several websites, with or without framework',
                fr : 'Maintenance ou création de plusieurs sites web avec ou sans framework'},
         level: 4},
        {name: {en : 'Javascript'},
         desc: {en : 'Used to dynamize several websites, including this CV (Jquery / Angular JS)',
                fr : 'Utilisation pour dynamiser plusieurs sites web dont ce CV (Jquery / Angular JS)'},
         level: 3},
        {name: {en : 'SQL'},
         desc: {en : 'Lot of projects using Mysql or SQlite',
                fr : 'Nombreux projets utilisants Mysql ou SQlite'},
         level: 2},
        {name: {en : 'C'},
         desc: {en : 'Studied in class, a few personal projets, patches for GTK+',
                fr : 'Étudié en cours, quelques projets personnels, développement de patchs pour Gtk+'},
         level: 2},
        {name: {en : 'Arduino'},
         desc: {en : 'Several projects using Arduino libraries, bare metal programming on an Atmel AVR microcontroller',
                fr : 'Plusieurs projet en C-Arduino, programmation directe d\'un µC AVR-Atmel'},
         level: 3},
        {name: {en : 'Java'},
         desc: {en : 'Surface knowledge, used for Android applications.',
                fr : 'Connaissance superficielle, utilisé pour des projets Android'},
         level: 1},
        {name: {en : 'Lisp'},
         desc: {en : 'Studied in class (6 months), used in Emacs',
                fr : 'Étudié en cours (6 mois), utilisation dans Emacs'},
         level: 2},
        {name: {en : 'VHDL, Asm IA32'},
         desc: {en : 'Studied in class (6 months)',
                fr : 'Étudié en cours (6 mois)'},
         level: 1},
        {name: {en : 'Scilab'},
         desc: {en : 'Numerical analysis class (6 months)',
                fr : 'Cours d\'analyse numérique (6 mois)'},
         level: 2},
        {name: {en : 'Linux'},
         desc: {en : 'Daily use since 2008, administration of an ARM Server to play music (MPD) and host websites (Nginx, Apache, Tornado, Mysql)',
                fr : 'Utilisation quotidienne depuis 2008, administration d\'un serveur ARM pour la diffusion de musique (MPD) et l\'hébergement de sites web (Nginx, Apache, Tornado, Mysql)'},
         level: 4},
        {name: {en : 'Git'},
         desc: {en : 'Daily use since 2010',
                fr : 'Utilisation quotidienne depuis 2010'},
         level: 4},];

    $scope.schoolsList = [
        {name: {en : 'Since September 2013',
                fr : 'Depuis Septembre 2013'},
         title: {en : 'Université de Technologie de Compiègne (France) - Computer Science',
                 fr : 'UTC - Génie Informatique'},
         desc: {en : 'Computer Science, Mathematics, Humanities',
                fr : 'Informatique, Mathématique, Sciences Humaines'},
         level: 1},
        {name: {en : '2011 - 2013',
                fr : '2011 à 2013'},
         title: {en : 'UTC - Common Core',
                 fr : 'UTC - Tronc Commun'},
         desc: {en : 'Mecanics, Mathematics, Computer Science, Humanities',
                fr : 'Mécanique, Mathématique, Informatique, Sciences Humaines'},
         level: 1},
        {name: {en : '2008 - 2011',
                fr : '2008 à 2011'},
         title: {en : 'High School - France',
                 fr : 'Lycée Émilie de Breteuil'},
         desc: {en : 'French Baccalauréat with honors - Science Stream<br/>Special Spanish section',
                fr : 'Série S - Sciences de l\'ingénieur<br/>Classe européenne Espagnol<br/>Bac Mention Très Bien'},
         level: 1},];

    $scope.experiencesList = [
        {name: {en : 'Since 2012',
                fr : 'Depuis 2012'},
         title: {en : 'Student association \'Le Polar\'',
                 fr : 'Association étudiante Le Polar'},
         desc: {en : 'Information systems manager, treasurer then president<br/>'+
                'Main IT Projects:<br/><ul>'+
                '  <li>Internal website developement</li>'+
                '  <li>Online reading of older examination subject with collaborative correction system</li>'+
                '  <li>Tickets printing, with barcodes</li>'+
                '</ul>',
                fr : 'Gestion du système informatique, Trésorerie puis Présidence<br/>'+
                'Projets informatiques :'+
                '<ul>'+
                '  <li>Développement du site web interne de l\'association</li>'+
                '  <li>Consultation des anciens sujet d\'examen en ligne, avec système de correction collaboratif</li>'+
                '  <li>Impression de tickets avec code-barre</li>'+
                '  <li>Vérification d\'entrée à un évènement par smartphone Android</li>'+
'</ul>'}},
        {name: {en : '2013'},
         title: {en : 'Creation of an online treasury management system for student associations',
                 fr : 'Création d\'un système de trésorerie en ligne pour les associations de l\'UTC'},
         desc: {en : 'Project leader - Web developer (Php, symfony)',
                fr : 'Chef de projet - développeur Web (Php - symfony)'}},
        {name: {en : '2012 - 2013',
                fr : '2012 à 2013'},
         title: {en : 'Webmaster for the scientific communication service my university',
                 fr : 'Webmestre de la Fête de la science à l\'UTC'},
         desc: {en : 'Maintenance then full rewrite of the website',
                fr : 'Maintenance puis réécriture complète du site'}},];

    $scope.title = {en : 'Computer Science Student', fr : 'Étudiant Ingénieur en informatique'};
    $scope.subtitle = {en : 'Systems & Computer Networks', fr : 'Systèmes et Réseaux'};
    $scope.experience = {en : 'Experience', fr : 'Expérience'};
    $scope.education = {en : 'Education', fr : 'Formation'};
    $scope.skills = {en : 'Skills', fr : 'Compétences'};
    $scope.languages = {en : 'Languages', fr : 'Langues'};

    $scope.expanderText = {en : 'Expand', fr : 'Développer'};

    $scope.objective = {en : 'Doing the UTC mid-term internishp', fr : 'Effectuer le stage d\'assistant ingénieur UTC'};
    $scope.objectiveTitle = {en : 'Objective : ', fr : 'Objectif : '};

    $scope.availableLanguages = [
        {code : 'en', name : 'English'},
        {code : 'fr', name : 'Français'}];
    $scope.pageLanguage = $scope.availableLanguages[1];

    $scope.expandSkills = false;
    $scope.expandExps = false;
}

cvApp.directive('cvItem', function () {
    return {
        restrict:'E',
        replace:true,
        template:'<ul class="list-unstyled"></ul>',
        scope: {items : '=', language : '=', expand : '=?'},
        link:function (scope, element, attrs, ctrl) {

            var recalculate = function() {
                element.html('');
                angular.forEach(scope.items, function(item) {
                    // on détermine le label à partir de level
                    var label_class="label-default";
                    switch (item.level) {
                    case 4:
                        label_class = "label-success"
                        break;
                    case 3:
                        label_class = "label-primary"
                        break;
                    case 2:
                        label_class = "label-info"
                        break;
                    }

                    // puis les attributs en fonction de la langue
                    var name = item.name[scope.language.code] || item.name['en'];
                    var desc = item.desc[scope.language.code] || item.desc['en'];

                    var span = '<span class="label '+label_class+'">'+name+'</span>';
                    if (item.title != undefined) {
                        var title = item.title[scope.language.code] || item.title['en'];
                        span += ' <b>'+ title +'</b><br/>';
                    }

                    // si expand est vrai ou non défini on affiche la description
                    if (scope.expand == true || scope.expand == undefined) {
                        var li = '<li>'+span+' '+desc+'</li>';
                        element.attr('class', 'list-unstyled');
                    } else {
                        var li = '<li>'+span+'</li>';

                        // on transforme la liste en inline à moins qu'il y ait un titre
                        if (item.title == undefined)
                            element.attr('class', 'list-inline');
                        else
                            element.attr('class', 'list-unstyled');
                    }
                    element.append(li);
                });
            }

            scope.$watch('language', function(newl, old) {
                recalculate();
            });
            scope.$watch('expand', function(newe, old) {
                recalculate();
            });
        }
    }
});

cvApp.directive('cvText', function () {
    return {
        restrict:'A',
        scope: {item : '=cvText', language : '='},
        link:function (scope, element, attrs, ctrl) {
            scope.$watch('language', function(language, old) {
                // on détermine le texte en fonction de la langue
                var text = scope.item[language.code];
                if (text == undefined)
                    text = scope.item['en'];
                
                element.html(text);
            });
        }
    }
});

cvApp.directive('cvExpander', function () {
    return {
        restrict:'E',
        template : '<input id="{{id}}" type="checkbox" ng-model="item"/> <label for="{{id}}" cv-text="text" language="language"></label>',
        scope: {item : '=', language : '=', text: '=', id: '@item'}
    }
});
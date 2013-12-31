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
         desc: {en : '',
                fr : 'Très bonne connaissance, utilisé dans de nombreux projets'},
         level: 4},
        {name: {en : 'Php'},
         desc: {en : '',
                fr : 'Maintenance ou création de plusieurs sites web avec ou sans framework'},
         level: 4},
        {name: {en : 'Javascript'},
         desc: {en : '',
                fr : 'Utilisation pour dynamiser plusieurs sites web dont ce CV'},
         level: 3},
        {name: {en : 'SQL'},
         desc: {en : '',
                fr : 'Nombreux projets utilisants Mysql ou SQlite'},
         level: 2},
        {name: {en : 'C'},
         desc: {en : '',
                fr : 'Étudié en cours, quelques projets personnels, développement de patchs pour Gtk+'},
         level: 2},
        {name: {en : 'Arduino'},
         desc: {en : '',
                fr : 'Plusieurs projet en C-Arduino, programmation directe d\'un µC AVR-Atmel'},
         level: 3},
        {name: {en : 'Java'},
         desc: {en : '',
                fr : 'Connaissance superficielle, utilisé pour des projets Android'},
         level: 1},
        {name: {en : 'Lisp'},
         desc: {en : '',
                fr : 'Étudié en cours (6 mois), utilisation dans Emacs'},
         level: 2},
        {name: {en : 'VHDL, Asm IA32'},
         desc: {en : '',
                fr : 'Étudié en cours (6 mois)'},
         level: 1},
        {name: {en : 'Scilab'},
         desc: {en : '',
                fr : 'Cours d\'analyse numérique (6 mois)'},
         level: 2},
        {name: {en : 'Linux'},
         desc: {en : '',
                fr : 'Utilisation quotidienne depuis 2008, administration d\'un serveur ARM pour la diffusion de musique (MPD) et l\'hébergement de sites web (Nginx, Apache, Tornado, Mysql)'},
         level: 4},
        {name: {en : 'Git'},
         desc: {en : '',
                fr : 'Utilisation quotidienne depuis 2010'},
         level: 4},];

    $scope.schoolsList = [
        {name: {en : 'Since September 2013',
                fr : 'Depuis Septembre 2013'},
         desc: {en : '<b>Université de Technologie de Compiègne (France) - Computer Science</b><br/>Computer Science, Mathematics, Humanities',
                fr : '<b>UTC - Génie Informatique</b><br/>Informatique, Mathématique, Sciences Humaines'},
         level: 1},
        {name: {en : '2011 - 2013',
                fr : '2011 à 2013'},
         desc: {en : '<b>UTC - Common Core</b><br/>Mecanics, Mathematics, Computer Science, Humanities',
                fr : '<b>UTC - Tronc Commun</b><br/>Mécanique, Mathématique, Informatique, Sciences Humaines'},
         level: 1},
        {name: {en : '2008 - 2011',
                fr : '2008 à 2011'},
         desc: {en : '<b>High School - France</b><br/>French Baccalauréat with honors - Science Stream<br/>Special Spanish section',
                fr : '<b>Lycée Émilie de Breteuil</b><br/>Série S - Sciences de l\'ingénieur<br/>Classe européenne Espagnol<br/>Bac Mention Très Bien'},
         level: 1},];

    $scope.experiencesList = [
        {name: {en : 'Since 2012',
                fr : 'Depuis 2012'},
         desc: {en : '',
                fr : '<b>Association étudiante Le Polar</b><br/>'+
                'Gestion du système informatique, Trésorerie puis Présidence<br/>'+
                'Projets informatiques :'+
                '<ul>'+
                '  <li>Développement du site web interne de l\'association</li>'+
                '  <li>Consultation des anciens sujet d\'examen en ligne, avec système de correction collaboratif</li>'+
                '  <li>Impression de tickets avec code-barre</li>'+
                '  <li>Vérification d\'entrée à un évènement par smartphone Android</li>'+
'</ul>'}},
        {name: {en : '2013'},
         desc: {en : '',
                fr : '<b>Création d\'un système de trésorerie en ligne pour les associations de l\'UTC</b><br/>Chef de projet - développeur Web (Php - symfony)'}},
        {name: {en : '2012 - 2013',
                fr : '2012 à 2013'},
         desc: {en : '',
                fr : '<b>Webmestre de la Fête de la science à l\'UTC</b><br/>Maintenance puis réécriture complète du site'}},];

    $scope.title = {en : 'Computer Science Student', fr : 'Étudiant Ingénieur en informatique'};
    $scope.subtitle = {en : 'Systems & Networks', fr : 'Systèmes et Réseaux'};
    $scope.experience = {en : 'Experience', fr : 'Expérience'};
    $scope.education = {en : 'Education', fr : 'Formation'};
    $scope.skills = {en : 'Skills', fr : 'Compétences'};
    $scope.languages = {en : 'Languages', fr : 'Langues'};

    $scope.availableLanguages = [
        {code : 'en', name : 'English'},
        {code : 'fr', name : 'Français'}];
    $scope.pageLanguage = $scope.availableLanguages[1];
}

cvApp.directive('cvItem', function () {
    return {
        restrict:'E',
        replace:true,
        template:'<ul class="list-unstyled"></ul>',
        scope: {items : '=', language : '='},
        link:function (scope, element, attrs, ctrl) {
            scope.$watch('language', function(language, old) {
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
                    var name = item.name[language.code];
                    if (name == undefined)
                        name = item.name['en'];
                    
                    var desc = item.desc[language.code];
                    if (desc == undefined)
                        desc = item.desc['en'];
                    
                    var li = '<li><span class="label '+label_class+'">'+name+'</span> '+desc+'</li>';
                    element.append(li);
                });
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
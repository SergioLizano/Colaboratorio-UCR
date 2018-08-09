/*
COLABORATORIO Configuration Variables
*/

// nren shortname
var nrenColaboratorio = 'NREN_SHORT_NAME';
// language used if the browser lang is not recognized or is not one of the Colaboratorio's one
var defaultLang = 'en'; //es|pt|fr|en

// URL for user registration
var registration_url = 'http://www.nren.edu/registration/';

//First service at login. Usually this should be not changed.
var base_service_login='https://dev1.redclara.net/Shibboleth.sso/Login?target=https://dev1.redclara.net/joomla4_new/joomla4/index.php&entityID=';

//Use Single Logout?
var use_slo='0'; //Don't try Single Logout
//SLO URL (URL for Single Logout)
var slo_url='https://idp.nren.net/idp/profile/Logout?action=logout';

//Show logos at footer
var show_logos = '0';

// Authentication path to go dev1 (main service)
//Use the following to use a Embedded Discojuice
var base_idp_clara_url='landing_colaboratorio/?target='; //if you're using this, you need to adjust landing_colaboratorio/additional-metadata.js to add your IdPs
// use this  example to use a single IdP. Here, only the entityID should be changed
//var base_idp_clara_url='https://dev1.redclara.net/Shibboleth.sso/Login?entityID=https://idp.nren.net/idp/shibboleth&target='; //IdP Example
// You can also send the user to a DS, in that case, you can talk to RedCLARA in order to set a DS Point in the Colaboratorio services
// or much better, use an URL of your own DS
// var base_idp_clara_url="https://dev1.redclara.net/Shibboleth.sso/DSWACREN?target="; //DS Example

// If you plan your users have webconference rooms like  http://colaboratorio.nren.net/user@university.edu 
// instead http://vcespresso.redclara.net/user@university.edu, then you shouls change this variable to the URL where this file is
var base_vce_url = 'http://vcespresso.redclara.net'; 


//The web conference central point  to authorize users and determinate where the conferences will be hosted
//usually you should not change this. It'll be used in future versions
var vce_load_balancer = 'http://vcespresso.redclara.net';
//Important: If your institution has deployed a set of mconf-live and mconf-recording server, you'll need to register it to the loadbalancer by sending an e-mail to vsog@redclara.net with your mconf-live server name and the salt for mconf network.

//The filesender to use. You can use https://filesender.redclara.net/filesender if you haven't deploy one for your institution
var filesender_url = "https://filesender.redclara.net/simplesaml/module.php/core/as_login.php?AuthId=default-sp&ReturnTo=https%3A%2F%2Ffilesender.redclara.net%2Ffilesender%2Findex.php%3Fs%3Dupload%26lang%3D"+lang+"%26nren%3D"+nrenColaboratorio+"&saml:idp=";



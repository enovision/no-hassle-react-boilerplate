import JsonSettings from '../../config/settings/settings.json';

class appSettings {

    constructor () {

        this.config = {};

        for (let property in JsonSettings) {
            if (JsonSettings.hasOwnProperty(property)) {
                this.config[property] = JsonSettings[property];
                let fName = 'get' + property.charAt(0).toUpperCase() + property.slice(1);
                this[fName] = function() {
                    return this.config[property];
                }
            }
        }
    }
}

// This makes sure that the object is only instantiated once (singleton) !!!
export let AppSettings = new appSettings();

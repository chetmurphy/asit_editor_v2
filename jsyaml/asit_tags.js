'use strict';

/*eslint-disable no-console*/

var fs = require('fs');
var path = require('path');
var util = require('util');
var yaml = require('../');


// Let's define a couple of classes.

function asit() {
    this.klass = 'asit';
}

// Then define YAML types to load and dump our Point/Space objects.

var AsitYamlType = new yaml.Type('!asit', {
    // Loader must parse sequence nodes only for this type (i.e. arrays in JS terminology).
    // Other available kinds are 'scalar' (string) and 'mapping' (object).
    // http://www.yaml.org/spec/1.2/spec.html#kind//
    kind: 'scalar',

    // Loader must check if the input object is suitable for this type.
    resolve: function (data) {
        // `data` may be either:
        // - Null in case of an "empty node" (http://www.yaml.org/spec/1.2/spec.html#id2786563)
        // - Array since we specified `kind` to 'sequence'
        return 0;
    },

    // If a node is resolved, use it to create a Point instance.
    construct: function (data) {
        return new Point(data[0], data[1], data[2]);
    },

    // Dumper must represent Point objects as three-element sequence in YAML.
    represent: function (point) {
        return [point.x, point.y, point.z];
    }
});



// After our types are defined, it's time to join them into a schema.

var ASIT_SCHEMA = yaml.DEFAULT_SCHEMA.extend([AsitYamlType]);

// do not execute the following if file is required (http://stackoverflow.com/a/6398335)
// if (require.main === module) {

//     // And read a document using that schema.
//     fs.readFile(path.join(__dirname, 'asit_tags.yml'), 'utf8', function (error, data) {
//         var loaded;

//         if (!error) {
//             loaded = yaml.load(data, { schema: ASIT_SCHEMA });
//             console.log(util.inspect(loaded, false, 20, true));
//         } else {
//             console.error(error.stack || error.message || String(error));
//         }
//     });
// }

// There are some exports to play with this example interactively.
module.exports.Asit = Asit;
module.exports.AsitYamlType = AsitYamlType;
module.exports.ASIT_SCHEMA = ASIT_SCHEMA;

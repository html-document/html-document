var Node = require('./Node');

export default class Doctype extends Node {
    _toHTML() {
        return '<!DOCTYPE html>';
    }
}

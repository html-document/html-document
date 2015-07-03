var Node = require('./Node').Node;

export class Doctype extends Node {
    _toHTML() {
        return '<!DOCTYPE html>';
    }
}

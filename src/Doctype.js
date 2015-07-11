import Node from './Node';

/**
 * @class Doctype
 * @extends Node
 */
export default class Doctype extends Node {
    _toHTML() {
        return '<!DOCTYPE html>';
    }
}

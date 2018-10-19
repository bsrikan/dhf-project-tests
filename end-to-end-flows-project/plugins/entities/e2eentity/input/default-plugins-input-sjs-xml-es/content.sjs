'use strict'

/*
* Create Content Plugin
*
* @param id         - the identifier returned by the collector
* @param options    - an object containing options. Options are sent from Java
*
* @return - your content
*/
function createContent(id, rawContent, options) {
  

  let source;

  // for xml we need to use xpath
  if(rawContent && xdmp.nodeKind(rawContent) === 'element' && rawContent instanceof XMLDocument) {
    source = rawContent
  }
  // for json we need to return the instance
  else if(rawContent && rawContent instanceof Document) {
    source = fn.head(rawContent.root);
  }
  // for everything else
  else {
    source = rawContent;
  }

  return extractInstanceE2eentity(source);
}
  
/**
* Creates an object instance from some source document.
* @param source  A document or node that contains
*   data for populating a e2eentity
* @return An object with extracted data and
*   metadata about the instance.
*/
function extractInstanceE2eentity(source) {
  let attachments = source;
  // now check to see if we have XML or json, then create a node clone to operate of off
  if (source instanceof Element || source instanceof ObjectNode) {
    let instancePath = '/';
    if(source instanceof Element) {
      //make sure we grab content root only
      instancePath = '/node()[not(. instance of processing-instruction() or . instance of comment())]';
    }
    source = new NodeBuilder().addNode(fn.head(source.xpath(instancePath))).toNode();
  }
  else{
    source = new NodeBuilder().addNode(fn.head(source)).toNode();
  }
  let id = !fn.empty(fn.head(source.xpath('/id'))) ? xs.string(fn.head(fn.head(source.xpath('/id')))) : null;
  let name = !fn.empty(fn.head(source.xpath('/name'))) ? xs.string(fn.head(fn.head(source.xpath('/name')))) : null;
  let salary = !fn.empty(fn.head(source.xpath('/salary'))) ? xs.decimal(fn.head(fn.head(source.xpath('/salary')))) : null;

  // return the instance object
  return {
    '$attachments': attachments,
    '$type': 'e2eentity',
    '$version': '0.0.1',
    'id': id,
    'name': name,
    'salary': salary
  }
};


function makeReferenceObject(type, ref) {
  return {
    '$type': type,
    '$ref': ref
  };
}

module.exports = {
  createContent: createContent
};


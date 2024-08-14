# rack-nodes

This was leverage from the html-nodes example.  The make_data.js file
was added to generate nodes and links for the Quads racks based on rack1000.txt.  Later we will add a configuration for rack16x6.txt (sorry, those files are not included, just know these are two configurations for the Quads systems)

## mods for racks

Using make_data.js to generate all the data.  The current thought is to generate nodes and links for everything I can thin of then experiment with how to change colors and visibility to better show ideas.

Later, I hope to merge this with Alloy18 VIZDEMO, probably after popout is added to VIDEMO.


## TODO:
- [x] dump stats: node count, link count
- [x] dump stats: counts for types of node/link
- [x] add WINDOWSPC based on rack configuration
- [x] add PCIECARD based on rack configuration
- [-] add PCIECARD_CONNECTOR 
- [x] add PCIECABLE from connector to system controller of each 
- [x] add NETWORKCONNECT
- [x] add 16x6 configuration
- [x] add internal chassis PCIELINK from system controller to modules
- [ ] exapnd for IOLS 
- [ ] get sample HVI config
- [ ] add HVICONNECTORS
- [ ] add HVICABLE
- [ ] exapnd for TSE 
- [ ] exapnd for KDI 

- [ ] clean up data vs racks.json
- [ ] use const for id strings


- [ ] experiment with colors of nodes/links
- [ ] experiment with colors on links/nodes for errors
- [ ] controls to hide levels
- [ ] controls to highlight levels
- [ ] controls to colapse levels? hide empty slots?



## REFERENCES
- https://github.com/vasturiano/3d-force-graph
- based on:
- https://github.com/vasturiano/three-forcegraph
- based on:
- https://github.com/vasturiano/d3-force-3d
- somewhere based on:
- https://github.com/d3/d3-force




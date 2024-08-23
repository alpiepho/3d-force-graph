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
- [-] get sample HVI config (stuck with screenshot for now)
- [x] exapnd for IOLS 
- [x] function add_data_node and add_data_link
- [x] replace name/subname with names[]
- [-] use const for id strings
- [x] add enables and filters for nodes and links (code is a bit ugly)
- [x] exapnd for KDI 
- [x] spilt LINK_TYPE_SOFTWARE for better control?
- [x] expand for QCS 
- [x] add HVICONNECTORS (SSYnc ports)
- [x] add HVICABLE
- [x] add PCIE bus
- [x] change PCIE to PXIE
- [x] clean up enable functions
- [x] Buttons 1000
- [x] Buttons 16x6
- [x] Buttons hw
- [x] Buttons sw
- [x] Buttons iols
- [x] Buttons kdi
- [x] Buttons qcs
- [x] Buttons rack--
- [x] Buttons chassis--
- [x] Buttons prune slots
- [x] Buttons prune ssync ports
- [x] lock down node/link colors instead of auto
- [x] Buttons lock all
- [x] Buttons unlock all
- [x] controls to hide empty slots?
- [x] Buttons save
- [ ] Buttons nodes dropdown checkboxes
- [ ] Buttons links dropdown checkboxes
- [ ] Buttons names dropdown checkboxes
- [ ] enumerate modules with PXI0::CHASSIS1::SLOT10::INSTR format
- [ ] move node/link/enables to data

- [ ] clean up data vs racks.json
- [ ] experiment with colors of nodes/links
- [ ] experiment with colors on links/nodes for errors
- [ ] controls to hide levels
- [ ] controls to highlight levels
- [ ] controls to collapse levels?

## Sample KDI node list

From https://confluence.it.keysight.com/display/ICCD/3.6+node_list+-+KDIC+Service+API
```
{
    "request": "node_list",
    "request_id": "kdia-example-dc756833-9341-4ac2-8f8a-1b8b69a0f9f5",
    "fabric_id": "6d9dd2fd-72f7-483c-a078-317168f69fcc",
    "message_version": 1,
    "error": "",
    "response": {
        "error": "",
        "node_list": {
            "node_list": [
                {
                    "id": "AFUVLCINL4A",
                    "fabric_id": "6d9dd2fd-72f7-483c-a078-317168f69fcc",
                    "name": "TS2TEST3.ggn.is.keysight.com",
                    "online": true,
                    "version": "3.5.0",
                    "ip": "10.15.98.77",
                    "http_port": "9090",
                    "client_type": "root",
                    "macaddr": "6c:02:e0:61:bb:4d"
                },
                {
                    "id": "U6STE441OLH",
                    "fabric_id": "6d9dd2fd-72f7-483c-a078-317168f69fcc",
                    "name": "SICTESTING1.ggn.is.keysight.com",
                    "online": true,
                    "version": "3.5.0",
                    "ip": "10.15.97.22",
                    "http_port": "9090",
                    "client_type": "leaf",
                    "macaddr": "c0:18:03:b8:04:2a"
                }
            ]
        }
    }
}
```

## QCS Files

From a brief demo of a QCS configuration tool (internal only tool).

- topology_template1.dot
- system_definition1.yml
- online compiler of .dot file: https://dreampuf.github.io/GraphvizOnline


## Future Ideas

There are number of "configuration" files that we could use as input for generating the node/links here instead of hardcoding
the generation.

Some possible inputs:
- IOLS physical connections (from data files or possibly GatherIOLogs)
- ChassisNumberInfo.xml from IOLS (possibly GatherIOLogs)
- system-definition.yml from QCS/TSE for ISM/HVI connections
- KDI node lists from crawling a fabric



## REFERENCES
- https://github.com/vasturiano/3d-force-graph
- based on:
- https://github.com/vasturiano/three-forcegraph
- based on:
- https://github.com/vasturiano/d3-force-3d
- somewhere based on:
- https://github.com/d3/d3-force
- kdi background:
- https://www.keysight.com/hk/en/lib/software-detail/computer-software/keysight-distributed-infrastructure--kdi--downloads.html
- https://observablehq.com/@ben-tanen/a-tutorial-to-using-d3-force-from-someone-who-just-learned-ho




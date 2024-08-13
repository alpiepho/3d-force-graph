var data = {};

const RACKS_TYPE = "1000";
// const RACKS_TYPE = "16x6";

const TOTAL_RACKS = 10;
const TOTAL_CHASSIS = 6;
const TOTAL_SLOTS = 18;

const NODE_TYPE_ROOT    = 0; // root, or set of racks
const NODE_TYPE_RACK    = 1; // physical rack
const NODE_TYPE_CHASSIS = 2; // physical chassis within a rack
const NODE_TYPE_SLOT    = 3; // physical slot within a chassis (1 is special, 19 is special)
const NODE_TYPE_MODULE  = 4; // physical module inserted in slot, may take more than 1 slot

// WINDOWSPC
// PCIECARD
// PCIECARD_CONNECTOR
// PCIECABLE
// NETWORKCARD
// NETWORKCONNECT

//const LINK_TYPE_ROOT    = 0; // root, or set of racks
const LINK_TYPE_RACK    = 1; // physical rack
const LINK_TYPE_CHASSIS = 2; // physical chassis within a rack
const LINK_TYPE_SLOT    = 3; // physical slot within a chassis (1 is special, 19 is special)
const LINK_TYPE_MODULE  = 4; // physical module inserted in slot, may take more than 1 slot

function get_chassis_type(chassis_i) {
    var name = "M9046A";
    switch (chassis_i) {
        case 1: name += "-QS2"; break;
        case 2: name += "-QS1"; break;
        case 3: name += "-QS2"; break;
        case 4: name += "-QS2"; break;
        case 5: name += "-QS2"; break;
        case 6: name += "-QS2"; break;
    }
    return name;
}

function make_module(chassis_id, index, subname) {
    var slot_id;
    var module_id;
    var module_name;
    var module_subname;

    slot_id = chassis_id + "_Slot_" + index;
    module_id = slot_id + "_Module_" + index;
    module_name = "Module " + index;
    module_subname = subname;       
    data.nodes.push({"id": module_id, "name": module_name, "subname": module_subname, "group": NODE_TYPE_MODULE});
    data.links.push({"source": slot_id, "target": module_id, "value": LINK_TYPE_MODULE});
}

function make_chassisset1(chassis_id) {
    make_module(chassis_id, 1, "M9023A");
    make_module(chassis_id, 2, "M5300A");
    make_module(chassis_id, 4, "M5300A");
    make_module(chassis_id, 6, "M5300A");
    make_module(chassis_id, 8, "M5300A");
    make_module(chassis_id, 10, "M9032A");
    make_module(chassis_id, 11, "M5300A");
    make_module(chassis_id, 13, "M5300A");
    make_module(chassis_id, 15, "M5201A");
    make_module(chassis_id, 16, "M5200A");
    make_module(chassis_id, 17, "Y1731A");
    make_module(chassis_id, 18, "M9805A");
}

function make_chassisset2(chassis_id) {
    make_module(chassis_id, 1, "M9023A");
    make_module(chassis_id, 2, "M5300A");
    make_module(chassis_id, 4, "M5300A");
    make_module(chassis_id, 6, "M5300A");
    make_module(chassis_id, 8, "M5300A");
    make_module(chassis_id, 10, "M9033A");
    make_module(chassis_id, 12, "M5300A");
    make_module(chassis_id, 14, "M5300A");
    make_module(chassis_id, 17, "M5201A");
    make_module(chassis_id, 18, "M5200A");
}

function make_chassisset3(chassis_id) {
    make_module(chassis_id, 1, "M9023A");
    make_module(chassis_id, 2, "M5300A");
    make_module(chassis_id, 4, "M5300A");
    make_module(chassis_id, 6, "M5300A");
    make_module(chassis_id, 8, "M5300A");
    make_module(chassis_id, 10, "M9033A");
    make_module(chassis_id, 12, "M5300A");
    make_module(chassis_id, 14, "M5300A");
    make_module(chassis_id, 17, "M5201A");
    make_module(chassis_id, 18, "M5200A");
}

function make_chassisset4(chassis_id) {
    make_module(chassis_id, 1, "M9023A");
    make_module(chassis_id, 2, "M5300A");
    make_module(chassis_id, 4, "M5300A");
    make_module(chassis_id, 6, "M5300A");
    make_module(chassis_id, 8, "M5300A");
    make_module(chassis_id, 10, "M9032A");
    make_module(chassis_id, 11, "M5300A");
    make_module(chassis_id, 13, "M5300A");
    make_module(chassis_id, 15, "M5300A");
    make_module(chassis_id, 17, "M5201A");
    make_module(chassis_id, 18, "M5200A");
}

function make_chassisset5(chassis_id) {
    make_module(chassis_id, 1, "M9023A");
    make_module(chassis_id, 2, "M5300A");
    make_module(chassis_id, 4, "M5300A");
    make_module(chassis_id, 6, "M5300A");
    make_module(chassis_id, 8, "M5300A");
    make_module(chassis_id, 10, "M9032A");
    make_module(chassis_id, 11, "M5300A");
    make_module(chassis_id, 13, "M5300A");
    make_module(chassis_id, 15, "M5300A");
    make_module(chassis_id, 17, "M5201A");
    make_module(chassis_id, 18, "M5200A");
}

function make_chassisset6(chassis_id) {
    make_module(chassis_id, 1, "M9023A");
    make_module(chassis_id, 2, "M5300A");
    make_module(chassis_id, 4, "M5300A");
    make_module(chassis_id, 6, "M5300A");
    make_module(chassis_id, 8, "M5300A");
    make_module(chassis_id, 10, "M9032A");
    make_module(chassis_id, 11, "M5300A");
    make_module(chassis_id, 13, "M5300A");
    make_module(chassis_id, 15, "M5201A");
    make_module(chassis_id, 16, "M5200A");
    make_module(chassis_id, 17, "M5201A");
    make_module(chassis_id, 18, "M5200A");
}

function make_chassis_internal_links(chassis_id) {
    var system_controller_id;
    var module_id;
    // search nodes for chassis_id + "_Slot_1" + "Module_1" as system_controller_id
    // search nodes for chassis_id + "_Slot_x" + "Module_x" as module_id
    // created link system_controller_id to module_id as PCIELINK
    for (let i=0; i<data.nodes.length; i++) {
        var node = data.nodes[i];
        if (node.id.endsWith("_Module_1")) {
            console.log(node.id + ": " + node.subname);
        }
    }

}

function show_stats() {
    console.log("total nodes: " + data.nodes.length);
    console.log("total links: " + data.links.length);
}

function make_data() {

    data["nodes"] = [];
    data["links"] = [];
 
    // ROOT
    data.nodes.push({"id": "All", "name": "All Racks", "group": NODE_TYPE_ROOT});
  
    // RACKS
    // add rack nodes
    for (let i=1; i<=TOTAL_RACKS; i++) { // rack
        let rack_id = "All_Rack" + i
        let rack_name = "Rack " + i
        data.nodes.push({"id": rack_id, "name": rack_name, "group": NODE_TYPE_RACK});
    }
    // add rack links
    for (let i=1; i<=TOTAL_RACKS; i++) { // rack
        let rack_id = "All_Rack" + i
        let rack_name = "Rack " + i
        data.links.push({"source": "All", "target": rack_id, "value": LINK_TYPE_RACK});
    }

    // CHASSIS
    // add chassis nodes for each rack
    for (let i=1; i<=TOTAL_RACKS; i++) {  // rack
        let rack_id = "All_Rack" + i
        // let rack_name = "Rack " + i
        for (let j=1; j<=TOTAL_CHASSIS; j++) { // chassis
            let chassis_id = rack_id + "_Chassis_" + j
            let chassis_name = "Chassis " + j
            let chassis_subname = get_chassis_type(j);
            data.nodes.push({"id": chassis_id, "name": chassis_name, "subname": chassis_subname, "group": NODE_TYPE_CHASSIS});
        }
    }


     // add chassis links for each rack
     for (let i=1; i<=TOTAL_RACKS; i++) {  // rack
        let rack_id = "All_Rack" + i
        // let rack_name = "Rack " + i
        for (let j=1; j<=TOTAL_CHASSIS; j++) { // chassis
            let chassis_id = rack_id + "_Chassis_" + j
            let chassis_name = "Chassis " + j
            data.links.push({"source": rack_id, "target": chassis_id, "value": LINK_TYPE_CHASSIS});
        }
    }

    // SLOTS
    // add slot nodes for each chassis
    for (let i=1; i<=TOTAL_RACKS; i++) {  // rack
        let rack_id = "All_Rack" + i
        // let rack_name = "Rack " + i
        for (let j=1; j<=TOTAL_CHASSIS; j++) { // chassis
            let chassis_id = rack_id + "_Chassis_" + j
            let chassis_name = "Chassis " + j
            for (let k=1; k<=TOTAL_SLOTS; k++) { // slot
                let slot_id = chassis_id + "_Slot_" + k
                let slot_name = "Slot " + k
                data.nodes.push({"id": slot_id, "name": slot_name, "group": NODE_TYPE_SLOT});
            }
        }
    }
     // add slot links for each rack
     for (let i=1; i<=TOTAL_RACKS; i++) {  // rack
        let rack_id = "All_Rack" + i
        // let rack_name = "Rack " + i
        for (let j=1; j<=TOTAL_CHASSIS; j++) { // chassis
            let chassis_id = rack_id + "_Chassis_" + j
            let chassis_name = "Chassis " + j
            for (let k=1; k<=TOTAL_SLOTS; k++) { // slot
                let slot_id = chassis_id + "_Slot_" + k
                let slot_name = "Slot " + k
                data.links.push({"source": chassis_id, "target": slot_id, "value": LINK_TYPE_SLOT});
            }
        }
    }
       
    // modules
    for (let i=1; i<=TOTAL_RACKS; i++) {  // rack
        let rack_id = "All_Rack" + i
        // let rack_name = "Rack " + i
        for (let j=1; j<=TOTAL_CHASSIS; j++) { // chassis
            let chassis_id = rack_id + "_Chassis_" + j
            let chassis_name = "Chassis " + j
            switch (j) {
                case 1: make_chassisset1(chassis_id); break;
                case 2: make_chassisset2(chassis_id); break;
                case 3: make_chassisset3(chassis_id); break;
                case 4: make_chassisset4(chassis_id); break;
                case 5: make_chassisset5(chassis_id); break;
                case 6: make_chassisset6(chassis_id); break;
            }
            make_chassis_internal_links(chassis_id);
        }
    }

    // console.log("data:");
    // console.log(JSON.stringify(data, null, 2));

    show_stats();
}

make_data();
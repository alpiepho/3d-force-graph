var data = {};

const RACKS_TYPE = "1000";
// const RACKS_TYPE = "16x6";

// const TOTAL_RACKS = 10;
// const TOTAL_CHASSIS = 6;
// const TOTAL_SLOTS = 18;

const TOTAL_RACKS = 2;
const TOTAL_CHASSIS = 1;
const TOTAL_SLOTS = 18;

const NODE_TYPE_ROOT                = 0;  // root, or set of racks
const NODE_TYPE_RACK                = 1;  // physical rack
const NODE_TYPE_CHASSIS             = 2;  // physical chassis within a rack
const NODE_TYPE_SLOT                = 3;  // physical slot within a chassis (1 is special, 19 is special)
const NODE_TYPE_MODULE              = 4;  // physical module inserted in slot, may take more than 1 slot
const NODE_TYPE_WINDOWSPC_CLIENT    = 5;  // PC to run IOLS and TSE software client
const NODE_TYPE_WINDOWSPC_HOST      = 6;  // PC to run TSE software host
const NODE_TYPE_PCIECARD            = 7;  // each client PC can have up to 3 PCIE (M9048A) cards
//const NODE_TYPE_NETWORKCARD         = 8; // each client PC will have at least 1 network card

//const LINK_TYPE_ROOT              = 0;  // root, or set of racks
const LINK_TYPE_RACK                = 1;  // physical rack
const LINK_TYPE_CHASSIS             = 2;  // physical chassis within a rack
const LINK_TYPE_SLOT                = 3;  // physical slot within a chassis (1 is special, 19 is special)
const LINK_TYPE_MODULE              = 4;  // physical module inserted in slot, may take more than 1 slot
const LINK_TYPE_WINDOWSPC_CLIENT    = 5;  // PC to run IOLS and TSE software client
const LINK_TYPE_WINDOWSPC_HOST      = 6;  // PC to run TSE software host

const LINK_TYPE_PCIECARD            = 7;  // each client PC can have up to 3 PCIE (M9048A) cards
const LINK_TYPE_NETWORKCARD         = 8;  // each client PC will have at least 1 network card


const LINK_TYPE_PCIEBACKPLANE       = 9;  // PCIE bus within the chassis

const LINK_TYPE_PCIECABLE           = 10; // cable from PCIE_CONNECTOR to system controller MODULE
const LINK_TYPE_HVICABLE            = 11; // cable between M9032A/ M9033A modules (HVI bus)
const LINK_TYPE_NETWORKCABLE        = 12; // TODO: is this how to show network?


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

    slot_id = chassis_id + "_Slot" + index;
    module_id = slot_id + "_Module" + index;
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
    // ex:
    // system_controller_id = All_Rack1_Chassis1_Slot1_Module1
    // module_id            = All_Rack1_Chassis1_Slot1_Module2 - All_Rack1_Chassis1_Slot18_Module18
    // chassis_id           = All_Rack1_Chassis1
    for (let i=0; i<data.nodes.length; i++) {
        var node = data.nodes[i];
        if (node.id.startsWith(chassis_id) && node.id.endsWith("_Module1")) {
            system_controller_id = node.id;
        }
        else if (node.id.startsWith(chassis_id) && node.id.includes("_Module")) {
            module_id = node.id;
            data.links.push({"source": system_controller_id, "target": module_id, "value": LINK_TYPE_PCIEBACKPLANE});
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
        let rack_id = "All_Rack" + i;
        let rack_name = "Rack " + i;
        data.nodes.push({"id": rack_id, "name": rack_name, "group": NODE_TYPE_RACK});
    }
    // add rack links
    for (let i=1; i<=TOTAL_RACKS; i++) { // rack
        let rack_id = "All_Rack" + i;
        data.links.push({"source": "All", "target": rack_id, "value": LINK_TYPE_RACK});
    }

    // WINDOWS PC CLIENT
    // add pc client nodes
    for (let i=1; i<=TOTAL_RACKS; i++) {
        let rack_id = "All_Rack" + i;
        let pc_id = rack_id + "_PC" + 1;
        let pc_name = "PC " + 1;
        let pc_subname = "HP ZCentral 4R";
        data.nodes.push({"id": pc_id, "name": pc_name, "subname": pc_subname, "group": NODE_TYPE_WINDOWSPC_CLIENT});
    }
    // add pc links for each rack
    for (let i=1; i<=TOTAL_RACKS; i++) {
        let rack_id = "All_Rack" + i;
        let pc_id = rack_id + "_PC" + 1;
        data.links.push({"source": rack_id, "target": pc_id, "value": LINK_TYPE_WINDOWSPC_CLIENT});
    }

    // WINDOWS PC CLIENT PCIECARD
    // add pc client pciecard nodes
    for (let i=1; i<=TOTAL_RACKS; i++) {
        let rack_id = "All_Rack" + i;
        let pc_id = rack_id + "_PC" + 1;
        for (let j=1; j<=3; j++) {
            let pciecard_id = pc_id + "_PCIECard" + j;
            let pciecard_name = "PCIECard " + j
            data.nodes.push({"id": pciecard_id, "name": pciecard_name, "group": NODE_TYPE_PCIECARD});
        }
    }
    // add pciecard links for each pcard
    for (let i=1; i<=TOTAL_RACKS; i++) {
        let rack_id = "All_Rack" + i;
        let pc_id = rack_id + "_PC" + 1;
        for (let j=1; j<=3; j++) {
            let pciecard_id = pc_id + "_PCIECard" + j;
            data.links.push({"source": pc_id, "target": pciecard_id, "value": LINK_TYPE_PCIECARD});
        }
    }

    // WINDOWS PC HOST
    {
        // add pc host nodes
        let all_id = "All";
        let pchost_id = all_id + "_PCHost" + 1;
        let pchost_name = "PC Host" + 1;
        let pchost_subname = "HP Z8";
        data.nodes.push({"id": pchost_id, "name": pchost_name, "subname": pchost_subname, "group": NODE_TYPE_WINDOWSPC_HOST});
        data.links.push({"source": all_id, "target": pchost_id, "value": LINK_TYPE_WINDOWSPC_HOST});
        // add network links to each client pc
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC" + 1;
            data.links.push({"source": pchost_id, "target": pc_id, "value": LINK_TYPE_WINDOWSPC_HOST});
        }
    }


    // CHASSIS
    // add chassis nodes for each rack
    for (let i=1; i<=TOTAL_RACKS; i++) {
        let rack_id = "All_Rack" + i;
         for (let j=1; j<=TOTAL_CHASSIS; j++) {
            let chassis_id = rack_id + "_Chassis" + j;
            let chassis_name = "Chassis " + j;
            let chassis_subname = get_chassis_type(j);
            data.nodes.push({"id": chassis_id, "name": chassis_name, "subname": chassis_subname, "group": NODE_TYPE_CHASSIS});
        }
    }


     // add chassis links for each rack
     for (let i=1; i<=TOTAL_RACKS; i++) {
        let rack_id = "All_Rack" + i;
        for (let j=1; j<=TOTAL_CHASSIS; j++) {
            let chassis_id = rack_id + "_Chassis" + j;
            data.links.push({"source": rack_id, "target": chassis_id, "value": LINK_TYPE_CHASSIS});
        }
    }

    // SLOTS
    // add slot nodes for each chassis
    for (let i=1; i<=TOTAL_RACKS; i++) {
        let rack_id = "All_Rack" + i
        for (let j=1; j<=TOTAL_CHASSIS; j++) {
            let chassis_id = rack_id + "_Chassis" + j
            for (let k=1; k<=TOTAL_SLOTS; k++) { // slot
                let slot_id = chassis_id + "_Slot" + k
                let slot_name = "Slot " + k
                data.nodes.push({"id": slot_id, "name": slot_name, "group": NODE_TYPE_SLOT});
            }
        }
    }
     // add slot links for each rack
     for (let i=1; i<=TOTAL_RACKS; i++) {
        let rack_id = "All_Rack" + i
        for (let j=1; j<=TOTAL_CHASSIS; j++) {
            let chassis_id = rack_id + "_Chassis" + j
            let chassis_name = "Chassis " + j
            for (let k=1; k<=TOTAL_SLOTS; k++) { // slot
                let slot_id = chassis_id + "_Slot" + k
                let slot_name = "Slot " + k
                data.links.push({"source": chassis_id, "target": slot_id, "value": LINK_TYPE_SLOT});
            }
        }
    }
       
    // modules
    for (let i=1; i<=TOTAL_RACKS; i++) {
        let rack_id = "All_Rack" + i
        for (let j=1; j<=TOTAL_CHASSIS; j++) {
            let chassis_id = rack_id + "_Chassis" + j
             switch (j) {
                case 1: make_chassisset1(chassis_id); break;
                // case 2: make_chassisset2(chassis_id); break;
                // case 3: make_chassisset3(chassis_id); break;
                // case 4: make_chassisset4(chassis_id); break;
                // case 5: make_chassisset5(chassis_id); break;
                // case 6: make_chassisset6(chassis_id); break;
            }
            make_chassis_internal_links(chassis_id);
        }
    }

    // console.log("data:");
    console.log(JSON.stringify(data, null, 2));

    show_stats();
}

make_data();
var data = {};

const RACKS_TYPE_1000 = "1000"
const RACKS_TYPE_16x6 = "16x6"
var RACKS_TYPE = RACKS_TYPE_1000;
// RACKS_TYPE = RACKS_TYPE_16x6;


var TOTAL_RACKS = 10;
var TOTAL_CHASSIS = 6;
var TOTAL_SLOTS = 18;
var TOTAL_PCIECARDS = 3;
if (RACKS_TYPE == RACKS_TYPE_16x6) {
    TOTAL_RACKS = 1;
    TOTAL_CHASSIS = 6;
    TOTAL_SLOTS = 18;
    TOTAL_PCIECARDS = 1;
}

//DEBUG
TOTAL_RACKS = 2;
TOTAL_CHASSIS = 2;
TOTAL_SLOTS = 18;
TOTAL_PCIECARDS = 3;

const NODE_TYPE_ROOT                = 0;  // root, or set of racks
const NODE_TYPE_RACK                = 1;  // physical rack
const NODE_TYPE_CHASSIS             = 2;  // physical chassis within a rack
const NODE_TYPE_SLOT                = 3;  // physical slot within a chassis (1 is special, 19 is special)
const NODE_TYPE_MODULE              = 4;  // physical module inserted in slot, may take more than 1 slot
const NODE_TYPE_WINDOWSPC_CLIENT    = 5;  // PC to run IOLS and TSE software client
const NODE_TYPE_WINDOWSPC_HOST      = 6;  // PC to run TSE software host
const NODE_TYPE_PCIECARD            = 7;  // each client PC can have up to 3 PCIE (M9048A) cards
// NOTE: skipping nodes for network cards, might need for DII
// const NODE_TYPE_NETWORKCARD       = 8; // each client PC will have at least 1 network card

// const NODE_TYPE_IOLS
// const NODE_TYPE_CONNECTION_EXPERT
// const NODE_TYPE_TSE_CLIENT
// const NODE_TYPE_TSE_HOST
// const NODE_TYPE_KDI_CLIENT
// const NODE_TYPE_KDI_SERVICE
// const NODE_TYPE_KDI_ROOT

// NOTE: no need for this
// const LINK_TYPE_ROOT              = 0;  // root, or set of racks
const LINK_TYPE_RACK                = 1;  // physical rack
const LINK_TYPE_CHASSIS             = 2;  // physical chassis within a rack
const LINK_TYPE_SLOT                = 3;  // physical slot within a chassis (1 is special, 19 is special)
const LINK_TYPE_MODULE              = 4;  // physical module inserted in slot, may take more than 1 slot
const LINK_TYPE_WINDOWSPC_CLIENT    = 5;  // PC to run IOLS and TSE software client
const LINK_TYPE_WINDOWSPC_HOST      = 6;  // PC to run TSE software host
const LINK_TYPE_PCIECARD            = 7;  // each client PC can have up to 3 PCIE (M9048A) cards
const LINK_TYPE_PCIEBACKPLANE       = 8;  // PCIE bus within the chassis
const LINK_TYPE_PCIECABLE           = 9;  // cable from PCIE_CONNECTOR to system controller MODULE
const LINK_TYPE_NETWORKCABLE        = 12; // TODO: is this how to show network?

// const LINK_TYPE_HVICABLE            = 10; // cable between M9032A/ M9033A modules (HVI bus)
// const LINK_TYPE_IOLS
// const LINK_TYPE_KDI
// const const LINK_TYPE_PCIEADDR
// const LINK_TYPE_HVIADDR
// const LINK_TYPE_NETWORKADDR

const ENABLE_LINK_TYPE_PCIECABLE = 1;

function get_chassis_typeA(chassis_i) {
    var name = "M9046A";
    if (RACKS_TYPE == RACKS_TYPE_1000) {
        switch (chassis_i) {
            case 1: name += "-QS2"; break;
            case 2: name += "-QS1"; break;
            case 3: name += "-QS2"; break;
            case 4: name += "-QS2"; break;
            case 5: name += "-QS2"; break;
            case 6: name += "-QS2"; break;
        }
    }
    if (RACKS_TYPE == RACKS_TYPE_16x6) {
        switch (chassis_i) {
            case 1: name += "-QS1"; break;
            case 2: name += "-QS1"; break;
            case 3: name += "-QS1"; break;
            case 4: name += "-QS1"; break;
            case 5: name += "-QS1"; break;
            case 6: name += "-QS1"; break;
        }
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
    if (RACKS_TYPE == RACKS_TYPE_1000) {
        make_module(chassis_id, 17, "M5201A");
        make_module(chassis_id, 18, "M5200A");    
    }
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

function make_pcie_cables1000(pc_id) {
    let parts = pc_id.split("_PC");
    let rack_id = parts[0];
    var pciecard_id;
    var module_id;
    var chassis_count = 0;
 
    // pciecard1 -> all_rackX_chassis1_slot1_module1 (system controller for chassis)
    pciecard_id = pc_id + "_PCIECard" + 1;
    module_id = rack_id + "_Chassis1_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        data.links.push({"source": pciecard_id, "target": module_id, "value": LINK_TYPE_PCIECABLE});
        chassis_count++;
    }
    // pciecard1 -> all_rackX_chassis2_slot1_module1 (system controller for chassis)
    pciecard_id = pc_id + "_PCIECard" + 1;
    module_id = rack_id + "_Chassis2_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        data.links.push({"source": pciecard_id, "target": module_id, "value": LINK_TYPE_PCIECABLE});
        chassis_count++;
    }
    // pciecard2 -> all_rackX_chassis3_slot1_module1 (system controller for chassis)
    pciecard_id = pc_id + "_PCIECard" + 2;
    module_id = rack_id + "_Chassis3_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        data.links.push({"source": pciecard_id, "target": module_id, "value": LINK_TYPE_PCIECABLE});
        chassis_count++;
    }
    // pciecard2 -> all_rackX_chassis4_slot1_module1 (system controller for chassis)
    pciecard_id = pc_id + "_PCIECard" + 2;
    module_id = rack_id + "_Chassis4_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        data.links.push({"source": pciecard_id, "target": module_id, "value": LINK_TYPE_PCIECABLE});
        chassis_count++;
    }
    // pciecard3 -> all_rackX_chassis5_slot1_module1 (system controller for chassis)
    pciecard_id = pc_id + "_PCIECard" + 3;
    module_id = rack_id + "_Chassis5_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        data.links.push({"source": pciecard_id, "target": module_id, "value": LINK_TYPE_PCIECABLE});
        chassis_count++;
    }
    // pciecard3 -> all_rackX_chassis6_slot1_module1 (system controller for chassis)
    pciecard_id = pc_id + "_PCIECard" + 3;
    module_id = rack_id + "_Chassis6_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        data.links.push({"source": pciecard_id, "target": module_id, "value": LINK_TYPE_PCIECABLE});
        chassis_count++;
    }
}

function make_pcie_cables16x6(pc_id, chassis_id) {
    let parts = pc_id.split("_PC");
     var pciecard_id;
    var module_id;
    var chassis_count = 0;
 
    // pciecard1 -> all_rackX_chassis1_slot1_module1 (system controller for chassis)
    pciecard_id = pc_id + "_PCIECard" + 1;
    module_id = chassis_id + "_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        data.links.push({"source": pciecard_id, "target": module_id, "value": LINK_TYPE_PCIECABLE});
        chassis_count++;
    }

}

function make_hvi_cables(chassis_id) { // TODO
    // hook up slot 10 modules per map
    // verify slot 10 modules
    // topology:
    // - chassis: tse-tcp://localhost/PXI0::3::BACKPLANE
    // downstream:
    //     - 1: tse-tcp://localhost/PXI0::4::BACKPLANE
    //     - 2: tse-tcp://10.10.10.102:8674/PXI0::3::BACKPLANE
    //     - 3: tse-tcp://10.10.10.103:8674/PXI0::3::BACKPLANE

    // - chassis: tse-tcp://localhost/PXI0::4::BACKPLANE
    // downstream:
    //     - 1: tse-tcp:://localhost/PXI0::1::BACKPLANE
    //     - 2: tse-tcp:://localhost/PXI0::2::BACKPLANE
    //     - 3: tse-tcp:://localhost/PXI0::5::BACKPLANE
    //     - 4: tse-tcp:://localhost/PXI0::6::BACKPLANE

    // - chassis: tse-tcp://10.10.10.102:8674/PXI0::3::BACKPLANE
    // downstream:
    //   - 1: tse-tcp:://10.10.10.102:8674/PXI0::4::BACKPLANE

    // - chassis: tse-tcp://10.10.10.102:8674/PXI0::4::BACKPLANE
    // downstream:
    //     - 1: tse-tcp:://10.10.10.102/PXI0::1::BACKPLANE
    //     - 2: tse-tcp:://10.10.10.102/PXI0::2::BACKPLANE
    //     - 3: tse-tcp:://10.10.10.102/PXI0::5::BACKPLANE
    //     - 4: tse-tcp:://10.10.10.102/PXI0::6::BACKPLANE

    // - chassis: tse-tcp://10.10.10.103:8674/PXI0::3::BACKPLANE
    // downstream:
    //   - 1: tse-tcp:://10.10.10.103:8674/PXI0::4::BACKPLANE

    // - chassis: tse-tcp://10.10.10.103:8674/PXI0::4::BACKPLANE
    // downstream:
    //     - 1: tse-tcp:://10.10.10.103/PXI0::1::BACKPLANE
    //     - 2: tse-tcp:://10.10.10.103/PXI0::2::BACKPLANE
}

function validate_links() {
    var i, src_found, tgt_found;
    let links = data.links;
    let nodes = data.nodes;
    for (let j=0; j<links.length; j++) {
        let src_id = links[j].source;
        let tgt_id = links[j].target;
        src_found = 0;
        for (i=nodes.length-1; i>=0 && !src_found; i--) {
            let node = nodes[i];
            if (src_id == node.id) {
                src_found = 1;
            }
        }
        tgt_found = 0;
        for (i=nodes.length-1; i>=0 && !tgt_found; i--) {
            if (tgt_id == nodes[i].id) {
                tgt_found = 1;
            }
        }
        if (!src_found) {
            console.log("link.source not found in nodes: " + src_id);
            delete data.links[i];
        } else if (!tgt_found) {
            console.log("link.target not found in nodes: " + tgt_id);
        }
    }
}

function count_node_stat(tag) {
    let ex = tag + "[0-9]+$"
    var count = 0;
    for (let i=0; i<data.nodes.length; i++) {
        var node = data.nodes[i];
        if (node.id.match(ex)) {
            count++;
        }
    }
    return count;
}

function count_link_stat(tag) {
    let ex = tag + "[0-9]+$"
    var count = 0;
    for (let i=0; i<data.links.length; i++) {
        var link = data.link[i];
        if (link.id.match(ex)) {
            count++;
        }
    }
    return count;
}

function show_stats() {
    console.log("total nodes: " + data.nodes.length);
    console.log("total links: " + data.links.length);
    console.log("total nodes - Racks:   " + count_node_stat("_Rack"));
    console.log("total nodes - Chassis: " + count_node_stat("_Chassis"));
    console.log("total nodes - Modules: " + count_node_stat("_Module"));
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
    if (RACKS_TYPE == RACKS_TYPE_1000) {
        // add pc client nodes (1 pc per rack)
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC1";
            let pc_name = "PC 1";
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
            let pc_id = rack_id + "_PC1";
            for (let j=1; j<=TOTAL_PCIECARDS; j++) {
                let pciecard_id = pc_id + "_PCIECard" + j;
                let pciecard_name = "PCIECard " + j
                data.nodes.push({"id": pciecard_id, "name": pciecard_name, "group": NODE_TYPE_PCIECARD});
            }
        }
        // add pciecard links for each pcard
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC1";
            for (let j=1; j<=TOTAL_PCIECARDS; j++) {
                let pciecard_id = pc_id + "_PCIECard" + j;
                data.links.push({"source": pc_id, "target": pciecard_id, "value": LINK_TYPE_PCIECARD});
            }
        }
    }
    if (RACKS_TYPE == RACKS_TYPE_16x6) {
        // add pc client nodes (1 pc per chassis, single rack)
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            for (let j=1; j<=TOTAL_CHASSIS; j++) {
                let pc_id = rack_id + "_PC" + j;
                let pc_name = "PC " + j;
                let pc_subname = "HP ZCentral 4R";
                data.nodes.push({"id": pc_id, "name": pc_name, "subname": pc_subname, "group": NODE_TYPE_WINDOWSPC_CLIENT});
            }
        }
        // add pc links for each rack
        let all_id = "All";
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            for (let j=1; j<=TOTAL_CHASSIS; j++) {
                let pc_id = rack_id + "_PC" + j;
                data.links.push({"source": all_id, "target": pc_id, "value": LINK_TYPE_WINDOWSPC_CLIENT});
            }
        }

        // WINDOWS PC CLIENT PCIECARD
        // add pc client pciecard nodes
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC" + 1;
            for (let j=1; j<=TOTAL_CHASSIS; j++) {
                let pc_id = rack_id + "_PC" + j;
                for (let k=1; k<=TOTAL_PCIECARDS; k++) {
                    let pciecard_id = pc_id + "_PCIECard" + k;
                    let pciecard_name = "PCIECard " + k
                    data.nodes.push({"id": pciecard_id, "name": pciecard_name, "group": NODE_TYPE_PCIECARD});
                }
            }
        }
        // add pciecard links for each pcard
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC" + 1;
            for (let j=1; j<=TOTAL_CHASSIS; j++) {
                let pc_id = rack_id + "_PC" + j;
                for (let k=1; k<=TOTAL_PCIECARDS; k++) {
                    let pciecard_id = pc_id + "_PCIECard" + k;
                    data.links.push({"source": pc_id, "target": pciecard_id, "value": LINK_TYPE_PCIECARD});
                }
            }
        }
    }

    // WINDOWS PC HOST
    if (RACKS_TYPE == RACKS_TYPE_1000) {
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
            data.links.push({"source": pchost_id, "target": pc_id, "value": LINK_TYPE_NETWORKCABLE});
        }
    }

    // CHASSIS
    // add chassis nodes for each rack
    for (let i=1; i<=TOTAL_RACKS; i++) {
        let rack_id = "All_Rack" + i;
         for (let j=1; j<=TOTAL_CHASSIS; j++) {
            let chassis_id = rack_id + "_Chassis" + j;
            let chassis_name = "Chassis " + j;
            let chassis_subname = get_chassis_typeA(j);
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
       
    // MODULES
    for (let i=1; i<=TOTAL_RACKS; i++) {
        let rack_id = "All_Rack" + i
        for (let j=1; j<=TOTAL_CHASSIS; j++) {
            let chassis_id = rack_id + "_Chassis" + j
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

    // PCIECABLE
    if (ENABLE_LINK_TYPE_PCIECABLE) {
        if (RACKS_TYPE == RACKS_TYPE_1000) {
            for (let i=1; i<=TOTAL_RACKS; i++) {
                let rack_id = "All_Rack" + i;
                let pc_id = rack_id + "_PC1";
                make_pcie_cables1000(pc_id)
            }    
        }
        if (RACKS_TYPE == RACKS_TYPE_16x6) {
            for (let i=1; i<=TOTAL_RACKS; i++) {
                let rack_id = "All_Rack" + i;
                for (let j=1; j<=TOTAL_CHASSIS; j++) {
                    let chassis_id = rack_id + "_Chassis" + j;
                    let pc_id = rack_id + "_PC" + j;
                    make_pcie_cables16x6(pc_id, chassis_id)
                }
            }    
        }
    }



    // console.log("data:");
    console.log(JSON.stringify(data, null, 2));
    validate_links();

    show_stats();
}

make_data();
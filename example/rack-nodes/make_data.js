var data = {};

const RACKS_TYPE_1000   = "1000"
const RACKS_TYPE_16x6   = "16x6"

var RACKS_TYPE          = RACKS_TYPE_1000;
var TOTAL_RACKS         = 10;
var TOTAL_CHASSIS       = 6;
var TOTAL_SLOTS         = 18;
var TOTAL_PXIECARDS     = 3;
var TOTAL_PXIEBUSES     = 1;


var RACKS_MODIFIED              = 0;
var RACKS_MODIFIED_CUSTOM       = 1;
var RACKS_MODIFIED_HW_ONLY      = 2;
var RACKS_MODIFIED_SW_ONLY      = 4;
var RACKS_MODIFIED_IOLS_ONLY    = 8;
var RACKS_MODIFIED_KDI_ONLY     = 16;
var RACKS_MODIFIED_QCS_ONLY     = 32;
var RACKS_MODIFIED_PRUNED_SLOTS = 64;
var RACKS_MODIFIED_PRUNED_SSYNC = 128;


var TOTAL_OTHER_KDI_CLIENTS = 5;
var TOTAL_OTHER_KDI_CLIENTS_SVC = 2; // 10 is better for random
var TOTAL_OTHER_KDI_RANDOMIZE = 0;

const NODE_TYPE_ROOT                = 0;  // root, or set of racks
const NODE_TYPE_RACK                = 1;  // physical rack
const NODE_TYPE_CHASSIS             = 2;  // physical chassis within a rack
const NODE_TYPE_SLOT                = 3;  // physical slot within a chassis (1 is special, 19 is special)
const NODE_TYPE_MODULE              = 4;  // physical module inserted in slot, may take more than 1 slot
const NODE_TYPE_WINDOWSPC_CLIENT    = 5;  // PC to run IOLS and TSE software client
const NODE_TYPE_WINDOWSPC_HOST      = 6;  // PC to run TSE software host
const NODE_TYPE_PXIECARD            = 7;  // each client PC can have up to 3 PXIE (M9048A) cards
// NOTE: skipping nodes for network cards, might need for DII
const NODE_TYPE_NETWORKCARD         = 8; // each client PC will have at least 1 network card
const NODE_TYPE_IOLS                = 9;  // instance of IOLS libraries per client PC
const NODE_TYPE_CONNECTION_EXPERT   = 10; // instance of Connection Expert per client PC
const NODE_TYPE_KDI_ROOT            = 11; // root for KDI
const NODE_TYPE_KDI_ROOT_SVC        = 12; // root service for KDI
const NODE_TYPE_KDI_CLIENT          = 13;
const NODE_TYPE_KDI_CLIENT_SVC      = 14;
const NODE_TYPE_QCS_HOST            = 15;
const NODE_TYPE_QCS_CLIENT          = 16;
const NODE_TYPE_SSYNC_PORT          = 17;
const NODE_TYPE_PXIEBUS             = 18;

// NOTE: no need for this
const LINK_TYPE_ROOT                = 0;  // root, or set of racks
const LINK_TYPE_RACK                = 1;  // physical rack
const LINK_TYPE_CHASSIS             = 2;  // physical chassis within a rack
const LINK_TYPE_SLOT                = 3;  // physical slot within a chassis (1 is special, 19 is special)
const LINK_TYPE_MODULE              = 4;  // physical module inserted in slot, may take more than 1 slot
const LINK_TYPE_WINDOWSPC_CLIENT    = 5;  // PC to run IOLS and TSE software client
const LINK_TYPE_WINDOWSPC_HOST      = 6;  // PC to run TSE software host
const LINK_TYPE_PXIECARD            = 7;  // each client PC can have up to 3 PXIE (M9048A) cards
const LINK_TYPE_PXIEBACKPLANE       = 8;  // PXIE bus within the chassis
const LINK_TYPE_PXIECABLE           = 9;  // cable from PXIE_CONNECTOR to system controller MODULE
const LINK_TYPE_NETWORKCABLE        = 10; // TODO: is this how to show network?
const LINK_TYPE_SOFTWARE            = 11;  // instance of IOLS libraries per client PC
const LINK_TYPE_SOFTWARE_IOLS       = 12;
const LINK_TYPE_SOFTWARE_KDIROOT    = 13;
const LINK_TYPE_SOFTWARE_KDIPEER    = 14;
const LINK_TYPE_SOFTWARE_QCS_EXT    = 15;
const LINK_TYPE_SOFTWARE_QCS_INT    = 16;
const LINK_TYPE_SSYNC_PORT_IN       = 17;
const LINK_TYPE_SSYNC_PORT_OUT      = 18;
const LINK_TYPE_HVICABLE            = 19; // cable between M9032A/ M9033A modules (HVI bus)
const LINK_TYPE_PXIEBUS             = 20;

var ENABLE_NODE_TYPE_ROOT                = 0;
var ENABLE_NODE_TYPE_RACK                = 0;
var ENABLE_NODE_TYPE_CHASSIS             = 0;
var ENABLE_NODE_TYPE_SLOT                = 0;
var ENABLE_NODE_TYPE_MODULE              = 0;
var ENABLE_NODE_TYPE_WINDOWSPC_CLIENT    = 0;
var ENABLE_NODE_TYPE_WINDOWSPC_HOST      = 0;
var ENABLE_NODE_TYPE_PXIECARD            = 0;
// NOTE: skipping nodes for network cards, might need for DII
var ENABLE_NODE_TYPE_NETWORKCARD         = 0;
var ENABLE_NODE_TYPE_IOLS                = 0;
var ENABLE_NODE_TYPE_CONNECTION_EXPERT   = 0;
var ENABLE_NODE_TYPE_KDI_ROOT            = 0;
var ENABLE_NODE_TYPE_KDI_ROOT_SVC        = 0;
var ENABLE_NODE_TYPE_KDI_CLIENT          = 0;
var ENABLE_NODE_TYPE_KDI_CLIENT_SVC      = 0;
var ENABLE_NODE_TYPE_QCS_HOST            = 0;
var ENABLE_NODE_TYPE_QCS_CLIENT          = 0;
var ENABLE_NODE_TYPE_SSYNC_PORT          = 0;
var ENABLE_NODE_TYPE_PXIEBUS             = 0;        

// NOTE: no need for this
var ENABLE_LINK_TYPE_ROOT                = 0;
var ENABLE_LINK_TYPE_RACK                = 0;
var ENABLE_LINK_TYPE_CHASSIS             = 0;
var ENABLE_LINK_TYPE_SLOT                = 0;
var ENABLE_LINK_TYPE_MODULE              = 0;
var ENABLE_LINK_TYPE_WINDOWSPC_CLIENT    = 0;
var ENABLE_LINK_TYPE_WINDOWSPC_HOST      = 0;
var ENABLE_LINK_TYPE_PXIECARD            = 0;
var ENABLE_LINK_TYPE_PXIEBACKPLANE       = 0;
var ENABLE_LINK_TYPE_PXIECABLE           = 0;
var ENABLE_LINK_TYPE_NETWORKCABLE        = 0;
var ENABLE_LINK_TYPE_SOFTWARE            = 0;
var ENABLE_LINK_TYPE_SOFTWARE_IOLS       = 0;
var ENABLE_LINK_TYPE_SOFTWARE_KDIROOT    = 0;
var ENABLE_LINK_TYPE_SOFTWARE_KDIPEER    = 0;
var ENABLE_LINK_TYPE_SOFTWARE_QCS_EXT    = 0;
var ENABLE_LINK_TYPE_SOFTWARE_QCS_INT    = 0;
var ENABLE_LINK_TYPE_SSYNC_PORT_IN       = 0;
var ENABLE_LINK_TYPE_SSYNC_PORT_OUT      = 0;
var ENABLE_LINK_TYPE_HVICABLE            = 0;
var ENABLE_LINK_TYPE_PXIEBUS             = 0;

// var NODE_OPACITY_HW       = 1.0;
// var NODE_OPACITY_SW       = 1.0;
// var NODE_OPACITY_IOLS     = 1.0;
// var NODE_OPACITY_KDI      = 1.0;
// var NODE_OPACITY_QCS      = 1.0;

// var LINK_OPACITY_HW       = 1.0;
// var LINK_OPACITY_SW       = 1.0;
// var LINK_OPACITY_IOLS     = 1.0;
// var LINK_OPACITY_KDI      = 1.0;
// var LINK_OPACITY_QCS      = 1.0;


function trunc_name(full) {
    var result = full;
    if (result.length > 16) {
        result = full.slice(0,16) + "...";
    }
    return result;
}

var prune_nodes = [];
function add_data_node(id, names, group) {
    // filter here
    if (group == NODE_TYPE_ROOT                 && ENABLE_NODE_TYPE_ROOT                == 0) return;
    if (group == NODE_TYPE_RACK                 && ENABLE_NODE_TYPE_RACK                == 0) return;
    if (group == NODE_TYPE_CHASSIS              && ENABLE_NODE_TYPE_CHASSIS             == 0) return;
    if (group == NODE_TYPE_SLOT                 && ENABLE_NODE_TYPE_SLOT                == 0) return;
    if (group == NODE_TYPE_MODULE               && ENABLE_NODE_TYPE_MODULE              == 0) return;
    if (group == NODE_TYPE_WINDOWSPC_CLIENT     && ENABLE_NODE_TYPE_WINDOWSPC_CLIENT    == 0) return;
    if (group == NODE_TYPE_WINDOWSPC_HOST       && ENABLE_NODE_TYPE_WINDOWSPC_HOST      == 0) return;
    if (group == NODE_TYPE_PXIECARD             && ENABLE_NODE_TYPE_PXIECARD            == 0) return;
    if (group == NODE_TYPE_NETWORKCARD          && ENABLE_NODE_TYPE_NETWORKCARD         == 0) return;
    if (group == NODE_TYPE_IOLS                 && ENABLE_NODE_TYPE_IOLS                == 0) return;
    if (group == NODE_TYPE_CONNECTION_EXPERT    && ENABLE_NODE_TYPE_CONNECTION_EXPERT   == 0) return;
    if (group == NODE_TYPE_KDI_ROOT             && ENABLE_NODE_TYPE_KDI_ROOT            == 0) return;
    if (group == NODE_TYPE_KDI_ROOT_SVC         && ENABLE_NODE_TYPE_KDI_ROOT_SVC        == 0) return;
    if (group == NODE_TYPE_KDI_CLIENT           && ENABLE_NODE_TYPE_KDI_CLIENT          == 0) return;
    if (group == NODE_TYPE_KDI_CLIENT_SVC       && ENABLE_NODE_TYPE_KDI_CLIENT_SVC      == 0) return;
    if (group == NODE_TYPE_QCS_HOST             && ENABLE_NODE_TYPE_QCS_HOST            == 0) return;
    if (group == NODE_TYPE_QCS_CLIENT           && ENABLE_NODE_TYPE_QCS_CLIENT          == 0) return;
    if (group == NODE_TYPE_SSYNC_PORT           && ENABLE_NODE_TYPE_SSYNC_PORT          == 0) return;
    if (group == NODE_TYPE_PXIEBUS              && ENABLE_NODE_TYPE_PXIEBUS             == 0) return;   

    for (let i=0; i<prune_nodes.length; i++) {
        if (id == prune_nodes[i]) {
            return;
        }
    }

    // DEBUG
    //names.push(id);

    data.nodes.push({"id": id, "names": names, "group": group});
    // data.nodes.push({
    //     "id": id, "names": names, "group": group, 
    //     "x": 10, "y": 10, "z": 10,
    //     "fx": 10, "fy": 10, "fz": 10
    // });
}

function add_data_link(source, target, value) {
    // filter here
    // if (value == LINK_TYPE_ROOT          && ENABLE_LINK_TYPE_ROOT                == 0) return;
    if (value == LINK_TYPE_RACK             && ENABLE_LINK_TYPE_RACK                == 0) return;
    if (value == LINK_TYPE_CHASSIS          && ENABLE_LINK_TYPE_CHASSIS             == 0) return;
    if (value == LINK_TYPE_SLOT             && ENABLE_LINK_TYPE_SLOT                == 0) return;
    if (value == LINK_TYPE_MODULE           && ENABLE_LINK_TYPE_MODULE              == 0) return;
    if (value == LINK_TYPE_WINDOWSPC_CLIENT && ENABLE_LINK_TYPE_WINDOWSPC_CLIENT    == 0) return;
    if (value == LINK_TYPE_WINDOWSPC_HOST   && ENABLE_LINK_TYPE_WINDOWSPC_HOST      == 0) return;
    if (value == LINK_TYPE_PXIECARD         && ENABLE_LINK_TYPE_PXIECARD            == 0) return;
    if (value == LINK_TYPE_PXIEBACKPLANE    && ENABLE_LINK_TYPE_PXIEBACKPLANE       == 0) return;
    if (value == LINK_TYPE_PXIECABLE        && ENABLE_LINK_TYPE_PXIECABLE           == 0) return;
    if (value == LINK_TYPE_NETWORKCABLE     && ENABLE_LINK_TYPE_NETWORKCABLE        == 0) return;
    if (value == LINK_TYPE_SOFTWARE         && ENABLE_LINK_TYPE_SOFTWARE            == 0) return;
    if (value == LINK_TYPE_SOFTWARE_IOLS    && ENABLE_LINK_TYPE_SOFTWARE_IOLS       == 0) return;
    if (value == LINK_TYPE_SOFTWARE_KDIROOT && ENABLE_LINK_TYPE_SOFTWARE_KDIROOT    == 0) return;
    if (value == LINK_TYPE_SOFTWARE_KDIPEER && ENABLE_LINK_TYPE_SOFTWARE_KDIPEER    == 0) return;
    if (value == LINK_TYPE_SOFTWARE_QCS_EXT && ENABLE_LINK_TYPE_SOFTWARE_QCS_EXT    == 0) return;
    if (value == LINK_TYPE_SOFTWARE_QCS_INT && ENABLE_LINK_TYPE_SOFTWARE_QCS_INT    == 0) return;
    if (value == LINK_TYPE_SSYNC_PORT_IN    && ENABLE_LINK_TYPE_SSYNC_PORT_IN       == 0) return;
    if (value == LINK_TYPE_SSYNC_PORT_OUT   && ENABLE_LINK_TYPE_SSYNC_PORT_OUT      == 0) return;
    if (value == LINK_TYPE_HVICABLE         && ENABLE_LINK_TYPE_HVICABLE            == 0) return;
    if (value == LINK_TYPE_PXIEBUS          && ENABLE_LINK_TYPE_PXIEBUS             == 0) return;

    data.links.push({"source": source, "target": target, "value": value});
}

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
    add_data_node(module_id, [module_name, module_subname], NODE_TYPE_MODULE);
    add_data_link(slot_id, module_id, LINK_TYPE_MODULE);
}

function make_chassisset1(chassis_id) {
    make_module(chassis_id, 1, "M9023A");
    make_module(chassis_id, 2, "M5300A");   // 1 port
    make_module(chassis_id, 4, "M5300A");   // 1 port
    make_module(chassis_id, 6, "M5300A");   // 1 port
    make_module(chassis_id, 8, "M5300A");   // 1 port
    make_module(chassis_id, 10, "M9032A");  // 2 port
    make_module(chassis_id, 11, "M5300A");  // 1 port
    make_module(chassis_id, 13, "M5300A");  // 1 port
    make_module(chassis_id, 15, "M5201A");
    make_module(chassis_id, 16, "M5200A");
    make_module(chassis_id, 17, "Y1731A");
    make_module(chassis_id, 18, "M9805A");
}

function make_chassisset2(chassis_id) {
    make_module(chassis_id, 1, "M9023A");
    make_module(chassis_id, 2, "M5300A");   // 1 port
    make_module(chassis_id, 4, "M5300A");   // 1 port
    make_module(chassis_id, 6, "M5300A");   // 1 port
    make_module(chassis_id, 8, "M5300A");   // 1 port
    make_module(chassis_id, 10, "M9033A");  // 5 port
    make_module(chassis_id, 12, "M5300A");  // 1 port
    make_module(chassis_id, 14, "M5300A");  // 1 port
    make_module(chassis_id, 17, "M5201A");
    make_module(chassis_id, 18, "M5200A");
}

function make_chassisset3(chassis_id) {
    make_module(chassis_id, 1, "M9023A");
    make_module(chassis_id, 2, "M5300A");   // 1 port
    make_module(chassis_id, 4, "M5300A");   // 1 port
    make_module(chassis_id, 6, "M5300A");   // 1 port
    make_module(chassis_id, 8, "M5300A");   // 1 port
    make_module(chassis_id, 10, "M9033A");  // 5 port
    make_module(chassis_id, 12, "M5300A");  // 1 port
    make_module(chassis_id, 14, "M5300A");  // 1 port
    make_module(chassis_id, 17, "M5201A");
    make_module(chassis_id, 18, "M5200A");
}

function make_chassisset4(chassis_id) {
    make_module(chassis_id, 1, "M9023A");
    make_module(chassis_id, 2, "M5300A");   // 1 port
    make_module(chassis_id, 4, "M5300A");   // 1 port
    make_module(chassis_id, 6, "M5300A");   // 1 port
    make_module(chassis_id, 8, "M5300A");   // 1 port
    make_module(chassis_id, 10, "M9032A");  // 2 port
    make_module(chassis_id, 11, "M5300A");  // 1 port
    make_module(chassis_id, 13, "M5300A");  // 1 port
    make_module(chassis_id, 15, "M5300A");  // 1 port
    make_module(chassis_id, 17, "M5201A");
    make_module(chassis_id, 18, "M5200A");
}

function make_chassisset5(chassis_id) {
    make_module(chassis_id, 1, "M9023A");
    make_module(chassis_id, 2, "M5300A"); // 1 port
    make_module(chassis_id, 4, "M5300A"); // 1 port
    make_module(chassis_id, 6, "M5300A"); // 1 port
    make_module(chassis_id, 8, "M5300A"); // 1 port
    make_module(chassis_id, 10, "M9032A"); // 2 port
    make_module(chassis_id, 11, "M5300A"); // 1 port
    make_module(chassis_id, 13, "M5300A"); // 1 port
    make_module(chassis_id, 15, "M5300A"); // 1 port
    make_module(chassis_id, 17, "M5201A");
    make_module(chassis_id, 18, "M5200A");
}

function make_chassisset6(chassis_id) {
    make_module(chassis_id, 1, "M9023A");
    make_module(chassis_id, 2, "M5300A"); // 1 port
    make_module(chassis_id, 4, "M5300A"); // 1 port
    make_module(chassis_id, 6, "M5300A"); // 1 port
    make_module(chassis_id, 8, "M5300A"); // 1 port
    make_module(chassis_id, 10, "M9032A"); // 2 port
    make_module(chassis_id, 11, "M5300A"); // 1 port
    make_module(chassis_id, 13, "M5300A"); // 1 port
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
            add_data_link(system_controller_id, module_id, LINK_TYPE_PXIEBACKPLANE);
        }
    }
}

function make_pxie_cables1000(pc_id) {
    let parts = pc_id.split("_PC");
    let rack_id = parts[0];
    var pxiecard_id;
    var module_id;
    var chassis_count = 0;
 
    // pxiecard1 -> all_rackX_chassis1_slot1_module1 (system controller for chassis)
    pxiecard_id = pc_id + "_PXIECard" + 1;
    module_id = rack_id + "_Chassis1_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        add_data_link(pxiecard_id, module_id, LINK_TYPE_PXIECABLE);
        chassis_count++;
    }
    // pxiecard1 -> all_rackX_chassis2_slot1_module1 (system controller for chassis)
    pxiecard_id = pc_id + "_PXIECard" + 1;
    module_id = rack_id + "_Chassis2_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        add_data_link(pxiecard_id, module_id, LINK_TYPE_PXIECABLE);
        chassis_count++;
    }
    // pxiecard2 -> all_rackX_chassis3_slot1_module1 (system controller for chassis)
    pxiecard_id = pc_id + "_PXIECard" + 2;
    module_id = rack_id + "_Chassis3_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        add_data_link(pxiecard_id, module_id, LINK_TYPE_PXIECABLE);
        chassis_count++;
    }
    // pxiecard2 -> all_rackX_chassis4_slot1_module1 (system controller for chassis)
    pxiecard_id = pc_id + "_PXIECard" + 2;
    module_id = rack_id + "_Chassis4_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        add_data_link(pxiecard_id, module_id, LINK_TYPE_PXIECABLE);
        chassis_count++;
    }
    // pxiecard3 -> all_rackX_chassis5_slot1_module1 (system controller for chassis)
    pxiecard_id = pc_id + "_PXIECard" + 3;
    module_id = rack_id + "_Chassis5_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        add_data_link(pxiecard_id, module_id, LINK_TYPE_PXIECABLE);
        chassis_count++;
    }
    // pxiecard3 -> all_rackX_chassis6_slot1_module1 (system controller for chassis)
    pxiecard_id = pc_id + "_PXIECard" + 3;
    module_id = rack_id + "_Chassis6_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        add_data_link(pxiecard_id, module_id, LINK_TYPE_PXIECABLE);
        chassis_count++;
    }
}

function make_pxie_cables16x6(pc_id, chassis_id) {
    let parts = pc_id.split("_PC");
     var pxiecard_id;
    var module_id;
    var chassis_count = 0;
 
    // pxiecard1 -> all_rackX_chassis1_slot1_module1 (system controller for chassis)
    pxiecard_id = pc_id + "_PXIECard" + 1;
    module_id = chassis_id + "_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        add_data_link(pxiecard_id, module_id, LINK_TYPE_PXIECABLE);
        chassis_count++;
    }
}


function make_root() {
    var names = [];
    names.push("All Racks")
    if (RACKS_TYPE == RACKS_TYPE_1000) {
        names.push("type 1000");
        names.push("10 racks");
        names.push("6 chassis per rack");
        names.push("1 pc per rack");
        names.push("1 pc host");
    }
    if (RACKS_TYPE == RACKS_TYPE_16x6) {
        names.push("type 16x6");
        names.push("1 racks");
        names.push("6 chassis per rack");
        names.push("1 pc per chassis");
        names.push("no pc host");
    }
    if (RACKS_MODIFIED & RACKS_MODIFIED_CUSTOM) {
        names.push("DEBUG - custom");
    }
    if (RACKS_MODIFIED & RACKS_MODIFIED_HW_ONLY) {
        names.push("HARDWARE ONLY");
    }
    if (RACKS_MODIFIED & RACKS_MODIFIED_SW_ONLY) {
        names.push("SOFTWARE ONLY");
    }
    if (RACKS_MODIFIED & RACKS_MODIFIED_IOLS_ONLY) {
        names.push("IOLS ONLY");
    }
    if (RACKS_MODIFIED & RACKS_MODIFIED_KDI_ONLY) {
        names.push("KDI ONLY");
    }
    if (RACKS_MODIFIED & RACKS_MODIFIED_QCS_ONLY) {
        names.push("QCS ONLY");
    }
    if (RACKS_MODIFIED & RACKS_MODIFIED_PRUNED_SLOTS) {
        names.push("PRUNED SLOTS");
    }
    if (RACKS_MODIFIED & RACKS_MODIFIED_PRUNED_SSYNC) {
        names.push("PRUNED SSYNC");
    }
    RACKS_MODIFIED_PRUNED_SLOTS

    add_data_node("All", names, NODE_TYPE_ROOT);
}

function make_racks() {
    // add rack nodes
    for (let i=1; i<=TOTAL_RACKS; i++) { // rack
        let rack_id = "All_Rack" + i;
        let rack_name = "Rack " + i;
        add_data_node(rack_id, [rack_name], NODE_TYPE_RACK);
    }
    // add rack links
    for (let i=1; i<=TOTAL_RACKS; i++) { // rack
        let rack_id = "All_Rack" + i;
        add_data_link("All", rack_id, LINK_TYPE_RACK);
    }
}

function make_client_pcs() {
    if (RACKS_TYPE == RACKS_TYPE_1000) {
        // add pc client nodes (1 pc per rack)
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC1";
            let pc_name = "PC " + i;
            let pc_subname = "HP ZCentral 4R";
            add_data_node(pc_id, [pc_name, pc_subname], NODE_TYPE_WINDOWSPC_CLIENT);
        }
        // add pc links for each rack
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC" + 1;
            add_data_link(rack_id, pc_id, LINK_TYPE_WINDOWSPC_CLIENT);
        }

        // WINDOWS PC CLIENT PXIECARD
        // add pc client pxiecard nodes
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC1";
            for (let j=1; j<=TOTAL_PXIECARDS; j++) {
                let pxiecard_id = pc_id + "_PXIECard" + j;
                let pxiecard_name = "PXIECard " + j
                add_data_node(pxiecard_id, [pxiecard_name], NODE_TYPE_PXIECARD);
            }
        }
        // add pxiecard links for each pcard
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC1";
            for (let j=1; j<=TOTAL_PXIECARDS; j++) {
                let pxiecard_id = pc_id + "_PXIECard" + j;
                add_data_link(pc_id, pxiecard_id, LINK_TYPE_PXIECARD);
            }
        }

        // WINDOWS PC CLIENT PXIEBUS
        // add pc client pxiecard nodes
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC1";
            for (let j=1; j<=TOTAL_PXIEBUSES; j++) {
                let pxiebus_id = pc_id + "_PXIEBus" + j;
                let pxiebus_name = "PXIEBus " + j
                add_data_node(pxiebus_id, [pxiebus_name], NODE_TYPE_PXIEBUS);
            }
        }
        // add pxiecard links for each pcard
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC1";
            for (let j=1; j<=TOTAL_PXIEBUSES; j++) {
                let pxiebus_id = pc_id + "_PXIEBus" + j;
                add_data_link(pc_id, pxiebus_id, LINK_TYPE_PXIEBUS);
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
                add_data_node(pc_id, [pc_name, pc_subname], NODE_TYPE_WINDOWSPC_CLIENT);
            }
        }
        // add pc links for each rack
        let all_id = "All";
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            for (let j=1; j<=TOTAL_CHASSIS; j++) {
                let pc_id = rack_id + "_PC" + j;
                add_data_link(all_id, pc_id, LINK_TYPE_WINDOWSPC_CLIENT);
            }
        }

        // WINDOWS PC CLIENT PXIECARD
        // add pc client pxiecard nodes
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC" + 1;
            for (let j=1; j<=TOTAL_CHASSIS; j++) {
                let pc_id = rack_id + "_PC" + j;
                for (let k=1; k<=TOTAL_PXIECARDS; k++) {
                    let pxiecard_id = pc_id + "_PXIECard" + k;
                    let pxiecard_name = "PXIECard " + k
                    add_data_node(pxiecard_id, [pxiecard_name], NODE_TYPE_PXIECARD);
                }
            }
        }
        // add pxiecard links for each pcard
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC" + 1;
            for (let j=1; j<=TOTAL_CHASSIS; j++) {
                let pc_id = rack_id + "_PC" + j;
                for (let k=1; k<=TOTAL_PXIECARDS; k++) {
                    let pxiecard_id = pc_id + "_PXIECard" + k;
                    add_data_link(pc_id, pxiecard_id, LINK_TYPE_PXIECARD);
                }
            }
        }

        // WINDOWS PC CLIENT PXIEBUS
        // add pc client pxiecard nodes
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC" + 1;
            for (let j=1; j<=TOTAL_CHASSIS; j++) {
                let pc_id = rack_id + "_PC" + j;
                for (let k=1; k<=TOTAL_PXIEBUSES; k++) {
                    let pxiebus_id = pc_id + "_PXIEBus" + k;
                    let pxiebus_name = "PXIEBus " + k
                    add_data_node(pxiebus_id, [pxiebus_name], NODE_TYPE_PXIEBUS);
                }
            }
        }
        // add pxiecard links for each pcard
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC" + 1;
            for (let j=1; j<=TOTAL_CHASSIS; j++) {
                let pc_id = rack_id + "_PC" + j;
                for (let k=1; k<=TOTAL_PXIEBUSES; k++) {
                    let pxiebus_id = pc_id + "_PXIEBus" + k;
                    add_data_link(pc_id, pxiebus_id, LINK_TYPE_PXIEBUS);
                }
            }
        }
    }
}

function make_host_pcs() {
    if (RACKS_TYPE == RACKS_TYPE_1000) {
        // add pc host nodes
        let all_id = "All";
        let pchost_id = all_id + "_PCHost" + 1;
        let pchost_name = "PC 0 (Host)";
        let pchost_subname = "HP Z8";
        add_data_node(pchost_id, [pchost_name, pchost_subname], NODE_TYPE_WINDOWSPC_HOST);
        add_data_link(all_id, pchost_id, LINK_TYPE_WINDOWSPC_HOST);
        // add network links to each client pc
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC" + 1;
            add_data_link(pchost_id, pc_id, LINK_TYPE_NETWORKCABLE);
        }
    }
}

function make_chassis() {
    // add chassis nodes for each rack
    for (let i=1; i<=TOTAL_RACKS; i++) {
        let rack_id = "All_Rack" + i;
        for (let j=1; j<=TOTAL_CHASSIS; j++) {
            let chassis_id = rack_id + "_Chassis" + j;
            let chassis_name = "Chassis " + j;
            let chassis_subname = get_chassis_typeA(j);
            add_data_node(chassis_id, [chassis_name, chassis_subname], NODE_TYPE_CHASSIS);
        }
    }
    // add chassis links for each rack
    for (let i=1; i<=TOTAL_RACKS; i++) {
        let rack_id = "All_Rack" + i;
        for (let j=1; j<=TOTAL_CHASSIS; j++) {
            let chassis_id = rack_id + "_Chassis" + j;
            add_data_link(rack_id, chassis_id, LINK_TYPE_CHASSIS);
        }
    }
}

function make_slots() {
    // add slot nodes for each chassis
    for (let i=1; i<=TOTAL_RACKS; i++) {
        let rack_id = "All_Rack" + i
        for (let j=1; j<=TOTAL_CHASSIS; j++) {
            let chassis_id = rack_id + "_Chassis" + j
            for (let k=1; k<=TOTAL_SLOTS; k++) { // slot
                let slot_id = chassis_id + "_Slot" + k
                let slot_name = "Slot " + k
                add_data_node(slot_id, [slot_name], NODE_TYPE_SLOT);
            }
        }
    }
    // add slot links for each rack
    for (let i=1; i<=TOTAL_RACKS; i++) {
        let rack_id = "All_Rack" + i
        for (let j=1; j<=TOTAL_CHASSIS; j++) {
            let chassis_id = rack_id + "_Chassis" + j
            for (let k=1; k<=TOTAL_SLOTS; k++) { // slot
                let slot_id = chassis_id + "_Slot" + k
                add_data_link(chassis_id, slot_id, LINK_TYPE_SLOT);
            }
        }
    }
}

function make_modules() {
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
}

function make_pxie_cables() {
    if (ENABLE_LINK_TYPE_PXIECABLE) {
        if (RACKS_TYPE == RACKS_TYPE_1000) {
            for (let i=1; i<=TOTAL_RACKS; i++) {
                let rack_id = "All_Rack" + i;
                let pc_id = rack_id + "_PC1";
                make_pxie_cables1000(pc_id)
            }    
        }
        if (RACKS_TYPE == RACKS_TYPE_16x6) {
            for (let i=1; i<=TOTAL_RACKS; i++) {
                let rack_id = "All_Rack" + i;
                for (let j=1; j<=TOTAL_CHASSIS; j++) {
                    let chassis_id = rack_id + "_Chassis" + j;
                    let pc_id = rack_id + "_PC" + j;
                    make_pxie_cables16x6(pc_id, chassis_id)
                }
            }    
        }
    }
}

// var system_sync_modules = [];
function make_system_sync_ports() {
    // cycle thru all modules and add ports to hvi specific modules
    let ex = "_Module[0-9]+$"
    for (let i=0; i<data.nodes.length; i++) {
        var node = data.nodes[i];
        if (node.id.match(ex)) {
            var count = 0;
            if (node.names[1] == "M9033A") count = 5;
            if (node.names[1] == "M9032A") count = 2;
            if (node.names[1] == "M5300A") count = 1;
            
            for (let j=1; j<=count; j++) {
                var ssync_port_id = node.id + "_SSyncPort" + j;
                var ssync_port_name = "SSyncPort" + j;
                // system_sync_modules.push(ssync_port_id); // use later for cables
                add_data_node(ssync_port_id, [ssync_port_name], NODE_TYPE_SSYNC_PORT);
                if (j == 1)
                add_data_link(ssync_port_id, node.id, LINK_TYPE_SSYNC_PORT_IN);
                else
                add_data_link(node.id, ssync_port_id, LINK_TYPE_SSYNC_PORT_OUT);
            }
        }
    }
    // console.log(system_sync_modules)
}

function make_hvi_cables() {
    // derived from system_definition0.yml

    // - chassis: tse-tcp://localhost/PXI0::3::BACKPLANE  # assume M9033A 5 port
    // downstream:
    //     - 1: tse-tcp://localhost/PXI0::4::BACKPLANE
    //     - 2: tse-tcp://10.10.10.102:8674/PXI0::3::BACKPLANE # to 
    //     - 3: tse-tcp://10.10.10.103:8674/PXI0::3::BACKPLANE
    add_data_link(
        "All_Rack1_Chassis2_Slot10_Module10_SSyncPort2", 
        "All_Rack1_Chassis3_Slot10_Module10_SSyncPort1", 
        LINK_TYPE_HVICABLE
    );
    add_data_link(
        "All_Rack1_Chassis2_Slot10_Module10_SSyncPort3", 
        "All_Rack2_Chassis2_Slot10_Module10_SSyncPort1", 
        LINK_TYPE_HVICABLE
    );
    add_data_link(
        "All_Rack1_Chassis2_Slot10_Module10_SSyncPort4", 
        "All_Rack3_Chassis2_Slot10_Module10_SSyncPort1", 
        LINK_TYPE_HVICABLE
    );

    // - chassis: tse-tcp://localhost/PXI0::4::BACKPLANE  # assume M9033A 5 port
    // downstream:
    //     - 1: tse-tcp:://localhost/PXI0::1::BACKPLANE
    //     - 2: tse-tcp:://localhost/PXI0::2::BACKPLANE
    //     - 3: tse-tcp:://localhost/PXI0::5::BACKPLANE
    //     - 4: tse-tcp:://localhost/PXI0::6::BACKPLANE
    add_data_link(
        "All_Rack1_Chassis3_Slot10_Module10_SSyncPort2", 
        "All_Rack1_Chassis3_Slot6_Module6_SSyncPort1", 
        LINK_TYPE_HVICABLE
    );
    add_data_link(
        "All_Rack1_Chassis3_Slot10_Module10_SSyncPort3", 
        "All_Rack1_Chassis3_Slot8_Module6_SSyncPort1", 
        LINK_TYPE_HVICABLE
    );
    add_data_link(
        "All_Rack1_Chassis3_Slot10_Module10_SSyncPort4", 
        "All_Rack1_Chassis3_Slot12_Module6_SSyncPort1", 
        LINK_TYPE_HVICABLE
    );
    add_data_link(
        "All_Rack1_Chassis3_Slot10_Module10_SSyncPort5", 
        "All_Rack1_Chassis3_Slot14_Module6_SSyncPort1", 
        LINK_TYPE_HVICABLE
    );

    // - chassis: tse-tcp://10.10.10.102:8674/PXI0::3::BACKPLANE # assume M9032A 2 port
    // downstream:
    //   - 1: tse-tcp:://10.10.10.102:8674/PXI0::4::BACKPLANE
    add_data_link(
        "All_Rack2_Chassis1_Slot10_Module10_SSyncPort2", 
        "All_Rack2_Chassis2_Slot10_Module10_SSyncPort1", 
        LINK_TYPE_HVICABLE
    );

    // - chassis: tse-tcp://10.10.10.102:8674/PXI0::4::BACKPLANE  # assume M9033A 5 port
    // downstream:
    //     - 1: tse-tcp:://10.10.10.102/PXI0::1::BACKPLANE
    //     - 2: tse-tcp:://10.10.10.102/PXI0::2::BACKPLANE
    //     - 3: tse-tcp:://10.10.10.102/PXI0::5::BACKPLANE
    //     - 4: tse-tcp:://10.10.10.102/PXI0::6::BACKPLANE
    add_data_link(
        "All_Rack2_Chassis2_Slot10_Module10_SSyncPort2", 
        "All_Rack2_Chassis2_Slot2_Module2_SSyncPort1", 
        LINK_TYPE_HVICABLE
    );
    add_data_link(
        "All_Rack2_Chassis2_Slot10_Module10_SSyncPort3", 
        "All_Rack2_Chassis2_Slot4_Module4_SSyncPort1", 
        LINK_TYPE_HVICABLE
    );
    add_data_link(
        "All_Rack2_Chassis2_Slot10_Module10_SSyncPort4", 
        "All_Rack2_Chassis2_Slot12_Module12_SSyncPort1", 
        LINK_TYPE_HVICABLE
    );
    add_data_link(
        "All_Rack2_Chassis2_Slot10_Module10_SSyncPort5", 
        "All_Rack2_Chassis2_Slot14_Module14_SSyncPort1", 
        LINK_TYPE_HVICABLE
    );

    // - chassis: tse-tcp://10.10.10.103:8674/PXI0::3::BACKPLANE # assume M9032A 2 port
    // downstream:
    //   - 1: tse-tcp:://10.10.10.103:8674/PXI0::4::BACKPLANE
    add_data_link(
        "All_Rack3_Chassis2_Slot10_Module10_SSyncPort2", 
        "All_Rack3_Chassis3_Slot10_Module10_SSyncPort1", 
        LINK_TYPE_HVICABLE
    );

    // - chassis: tse-tcp://10.10.10.103:8674/PXI0::4::BACKPLANE  # assume M9033A 5 port
    // downstream:
    //     - 1: tse-tcp:://10.10.10.103/PXI0::1::BACKPLANE
    //     - 2: tse-tcp:://10.10.10.103/PXI0::2::BACKPLANE
    add_data_link(
        "All_Rack3_Chassis3_Slot10_Module10_SSyncPort2", 
        "All_Rack3_Chassis3_Slot2_Module2_SSyncPort1", 
        LINK_TYPE_HVICABLE
    );
    add_data_link(
        "All_Rack3_Chassis3_Slot10_Module10_SSyncPort3", 
        "All_Rack3_Chassis3_Slot4_Module2_SSyncPort1", 
        LINK_TYPE_HVICABLE
    );
}

function make_pxie_busses() {
    let ex = "_Module" + "[0-9]+$"
    for (let i=0; i<data.nodes.length; i++) {
        var node = data.nodes[i];
        if (node.id.match(ex)) {
            // determine PC and PXIEBus id from node.id
            var module_id = node.id;
            var parts = module_id.split("_Chassis");
            var pc_id = parts[0] + "_PC";
            if (RACKS_TYPE == RACKS_TYPE_1000) {
                pc_id += "1";
            }
            if (RACKS_TYPE == RACKS_TYPE_16x6) {
                pc_id += parts[1][0]; // should be chassis number
            }
            var pxie_bus_id = pc_id + "_PXIEBus1";
            // DEBUG
            // console.log(pxie_bus_id + " -> " + module_id)
            add_data_link(
                pxie_bus_id, 
                module_id, 
                LINK_TYPE_PXIEBUS
            );
        }
    }
}

function make_iols_and_connection_expert() {
    if (RACKS_TYPE == RACKS_TYPE_1000) {
        // add iols to pc client nodes (1 pc per rack)
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC1";
            let iols_id = pc_id + "_IOLS" + 1
            let iols_name = "IOLS"
            add_data_node(iols_id, [iols_name], NODE_TYPE_IOLS);
        }
        // add iols to pc links for each rack
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC" + 1;
            let iols_id = pc_id + "_IOLS" + 1
            add_data_link(pc_id, iols_id, LINK_TYPE_SOFTWARE);
        }
        // add connection expert to pc client nodes (1 pc per rack)
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC1";
            let iols_id = pc_id + "_IOLS" + 1
            let ce_id = iols_id + "_CONNECTIONEXPERT" + 1
            let ce_name = "ConnectionExpert 1"
            add_data_node(ce_id, [ce_name], NODE_TYPE_CONNECTION_EXPERT);
        }
        // add connection expert to pc links for each rack
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC" + 1;
            let iols_id = pc_id + "_IOLS" + 1
            let ce_id = iols_id + "_CONNECTIONEXPERT" + 1
            add_data_link(iols_id, ce_id, LINK_TYPE_SOFTWARE_IOLS);
        }
    }
    if (RACKS_TYPE == RACKS_TYPE_16x6) {
        // add iols to pc client nodes (1 pc per chassis, single rack)
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            for (let j=1; j<=TOTAL_CHASSIS; j++) {
                let pc_id = rack_id + "_PC" + j;
                let iols_id = pc_id + "_IOLS" + 1
                let iols_name = "IOLS"
                add_data_node(iols_id, [iols_name], NODE_TYPE_IOLS);
            }
        }
        // add iols to pc links for each rack
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            for (let j=1; j<=TOTAL_CHASSIS; j++) {
                let pc_id = rack_id + "_PC" + j;
                let iols_id = pc_id + "_IOLS" + 1
                add_data_link(pc_id, iols_id, LINK_TYPE_SOFTWARE);
            }
        }
       // add connection expert to pc client nodes (1 pc per chassis, single rack)
       for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            for (let j=1; j<=TOTAL_CHASSIS; j++) {
                let pc_id = rack_id + "_PC" + j;
                let iols_id = pc_id + "_IOLS" + 1
                let ce_id = iols_id + "_CONNECTIONEXPERT" + 1
                let ce_name = "ConnectionExpert 1"
                add_data_node(ce_id, [ce_name], NODE_TYPE_CONNECTION_EXPERT);
            }
        }
        // add connection expert to pc links for each rack
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            for (let j=1; j<=TOTAL_CHASSIS; j++) {
                let pc_id = rack_id + "_PC" + j;
                let iols_id = pc_id + "_IOLS" + 1
                let ce_id = iols_id + "_CONNECTIONEXPERT" + 1
                add_data_link(iols_id, ce_id, LINK_TYPE_SOFTWARE_IOLS);
            }
        }
    } 
}

function make_kdi_gateway() {

    // iot
    //     backend service
    //     device manager
    //     keycloak
    
    // add IoT and parts
    var names = [];
    names.push("IoT");
    var iot_id = "IoT";
    add_data_node(iot_id, names, NODE_TYPE_KDI_ROOT);

    names = [];
    names.push("Backend");
    var iot_backend_id = iot_id + "_Backend";
    add_data_node(iot_backend_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(iot_id, iot_backend_id, LINK_TYPE_SOFTWARE_KDIROOT);

    names = [];
    names.push("Device Manager");
    var iot_device_manager_id = iot_backend_id + "_DeviceManager";
    add_data_node(iot_device_manager_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(iot_device_manager_id, iot_backend_id, LINK_TYPE_SOFTWARE_KDIROOT);

    names = [];
    names.push("Keycloak");
    var iot_keycloak_id = iot_backend_id + "_Keycloak";
    add_data_node(iot_keycloak_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(iot_keycloak_id, iot_backend_id, LINK_TYPE_SOFTWARE_KDIROOT);


    // make kdi gateway and services
    var names = [];
    names.push("KDI Gateway");
    var kdi_gateway_id = "KDIGateway";
    add_data_node(kdi_gateway_id, names, NODE_TYPE_KDI_ROOT);
    // link to iot
    add_data_link(kdi_gateway_id, iot_id, LINK_TYPE_SOFTWARE_KDIROOT);

    names = [];
    names.push("KDIG");
    var kdi_kdig_id = kdi_gateway_id + "_KDIG";
    add_data_node(kdi_kdig_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(kdi_gateway_id, kdi_kdig_id, LINK_TYPE_SOFTWARE_KDIROOT);

    names = [];
    names.push("KDIS");
    var kdi_root_kdis_id = kdi_kdig_id + "_KDIS";
    add_data_node(kdi_root_kdis_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(kdi_kdig_id, kdi_root_kdis_id, LINK_TYPE_SOFTWARE_KDIROOT);

    names = [];
    names.push("Hydra");
    var kdi_root_hydra_id = kdi_kdig_id + "_Hydra";
    add_data_node(kdi_root_hydra_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(kdi_kdig_id, kdi_root_hydra_id, LINK_TYPE_SOFTWARE_KDIROOT);

    names = [];
    names.push("Postgres");
    var kdi_root_postgres_id = kdi_kdig_id + "_Postgres";
    add_data_node(kdi_root_postgres_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(kdi_kdig_id, kdi_root_postgres_id, LINK_TYPE_SOFTWARE_KDIROOT);
}

function make_kdi_root() {
    var names = [];
    names.push("KDI Root");
    // ex. from https://confluence.it.keysight.com/display/ICCD/3.6+node_list+-+KDIC+Service+API
    // "id": "AFUVLCINL4A",
    // "fabric_id": "6d9dd2fd-72f7-483c-a078-317168f69fcc",
    // "name": "TS2TEST3.ggn.is.keysight.com",
    // "online": true,
    // "version": "3.5.0",
    // "ip": "10.15.98.77",
    // "http_port": "9090",
    // "client_type": "root",
    // "macaddr": "6c:02:e0:61:bb:4d"
    names.push("id: AFUVLCINL4A");
    names.push(trunc_name("fabric_id: 6d9dd2fd-72f7-483c-a078-317168f69fcc"));
    var kdi_root_id = "KDIRoot";
    add_data_node(kdi_root_id, names, NODE_TYPE_KDI_ROOT);

    // link to kdi gateway
    var kdi_gateway_id = "KDIGateway";
    add_data_link(kdi_root_id, kdi_gateway_id, LINK_TYPE_SOFTWARE_KDIROOT);

    names = [];
    names.push("KDIC");
    var kdi_root_kdic_id = kdi_root_id + "_KDIC";
    add_data_node(kdi_root_kdic_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(kdi_root_id, kdi_root_kdic_id, LINK_TYPE_SOFTWARE_KDIROOT);

    names = [];
    names.push("KDIS");
    var kdi_root_kdis_id = kdi_root_kdic_id + "_KDIS";
    add_data_node(kdi_root_kdis_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(kdi_root_kdic_id, kdi_root_kdis_id, LINK_TYPE_SOFTWARE_KDIROOT);

    names = [];
    names.push("KDIMU");
    var kdi_root_kdimu_id = kdi_root_kdic_id + "_KDIMU";
    add_data_node(kdi_root_kdimu_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(kdi_root_kdic_id, kdi_root_kdimu_id, LINK_TYPE_SOFTWARE_KDIROOT);

    names = [];
    names.push("KDIU");
    var kdi_root_kdiu_id = kdi_root_kdic_id + "_KDIU";
    add_data_node(kdi_root_kdiu_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(kdi_root_kdic_id, kdi_root_kdiu_id, LINK_TYPE_SOFTWARE_KDIROOT);

    names = [];
    names.push("KDIP");
    var kdi_root_kdip_id = kdi_root_kdic_id + "_KDIP";
    add_data_node(kdi_root_kdip_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(kdi_root_kdic_id, kdi_root_kdip_id, LINK_TYPE_SOFTWARE_KDIROOT);

    names = [];
    names.push("Hydra");
    var kdi_root_hydra_id = kdi_root_kdic_id + "_Hydra";
    add_data_node(kdi_root_hydra_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(kdi_root_kdic_id, kdi_root_hydra_id, LINK_TYPE_SOFTWARE_KDIROOT);

    names = [];
    names.push("OpenFpa");
    var kdi_root_openfpa_id = kdi_root_kdic_id + "_OpenFpa";
    add_data_node(kdi_root_openfpa_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(kdi_root_kdic_id, kdi_root_openfpa_id, LINK_TYPE_SOFTWARE_KDIROOT);

    names = [];
    names.push("Sqlite");
    var kdi_root_sqlite_id = kdi_root_kdic_id + "_Sqlite";
    add_data_node(kdi_root_sqlite_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(kdi_root_kdic_id, kdi_root_sqlite_id, LINK_TYPE_SOFTWARE_KDIROOT);

    names = [];
    names.push("Postgres");
    var kdi_root_postgres_id = kdi_root_kdic_id + "_Postgres";
    add_data_node(kdi_root_postgres_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(kdi_root_kdic_id, kdi_root_postgres_id, LINK_TYPE_SOFTWARE_KDIROOT);
}

var client_names_count = 1;
function make_kdi_client_names(name) {
    // "id": "U6STE441OLH",
    // "fabric_id": "6d9dd2fd-72f7-483c-a078-317168f69fcc",
    // "name": "SICTESTING1.ggn.is.keysight.com",
    // "online": true,
    // "version": "3.5.0",
    // "ip": "10.15.97.22",
    // "http_port": "9090",
    // "client_type": "leaf",
    // "macaddr": "c0:18:03:b8:04:2a"
    var names = [];
    names.push(name + " " + client_names_count);
    names.push("id: U6STE441OLH" + client_names_count); // HACK
    client_names_count++;
    names.push(trunc_name("fabric_id: 6d9dd2fd-72f7-483c-a078-317168f69fcc"));
    return names;
}

function make_kdi_clients() {
    if (RACKS_TYPE == RACKS_TYPE_1000) {
        // add kdi client to pc client nodes (1 pc per rack)
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC1";
            let kdiclient_id = pc_id + "_KDICLIENT" + 1
            let kdiclient_name = "KDI Client"
            let names = make_kdi_client_names(kdiclient_name);
            add_data_node(kdiclient_id, names, NODE_TYPE_KDI_CLIENT);
            var kdi_kdic_id = kdiclient_id + "_KDIC";
            add_data_node(kdi_kdic_id, ["KDIC"], NODE_TYPE_KDI_ROOT_SVC);
            add_data_link(kdiclient_id, kdi_kdic_id, LINK_TYPE_SOFTWARE_KDIROOT);
            var kdi_kdiu_id = kdi_kdic_id + "_KDIU";
            add_data_node(kdi_kdiu_id, ["KDIU"], NODE_TYPE_KDI_ROOT_SVC);
            add_data_link(kdi_kdic_id, kdi_kdiu_id, LINK_TYPE_SOFTWARE_KDIROOT);
            var kdi_kdip_id = kdi_kdic_id + "_KDIP";
            add_data_node(kdi_kdip_id, ["KDIP"], NODE_TYPE_KDI_ROOT_SVC);
            add_data_link(kdi_kdic_id, kdi_kdip_id, LINK_TYPE_SOFTWARE_KDIROOT);
        }
        // add kdi client service to pc client nodes (1 pc per rack)
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC1";
            let kdiclient_svc_id = pc_id + "_KDICLIENT_SVC" + 1
            let kdiclient_svc_name = "KDI Client SVC"
            add_data_node(kdiclient_svc_id, [kdiclient_svc_name], NODE_TYPE_KDI_CLIENT_SVC);
        }
        // add kdi client service to pc links for each rack
        var kdi_root_id = "KDIRoot";
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC" + 1;
            let iols_id = pc_id + "_IOLS" + 1
            let kdiclient_id = pc_id + "_KDICLIENT" + 1
            let kdiclient_svc_id = pc_id + "_KDICLIENT_SVC" + 1
            add_data_link(kdi_root_id, kdiclient_id, LINK_TYPE_SOFTWARE_KDIROOT);
            add_data_link(kdiclient_id, kdiclient_svc_id, LINK_TYPE_SOFTWARE);
            add_data_link(kdiclient_svc_id, iols_id, LINK_TYPE_SOFTWARE_IOLS);
        }
    }
    if (RACKS_TYPE == RACKS_TYPE_16x6) {
        // add kdi client to pc client nodes (1 pc per chassis, single rack)
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            for (let j=1; j<=TOTAL_CHASSIS; j++) {
                let pc_id = rack_id + "_PC" + j;
                let kdiclient_id = pc_id + "_KDICLIENT" + 1
                let kdiclient_name = "KDI Client"
                let names = make_kdi_client_names(kdiclient_name);
                add_data_node(kdiclient_id, names, NODE_TYPE_KDI_CLIENT);
                var kdi_kdic_id = kdiclient_id + "_KDIC";
                add_data_node(kdi_kdic_id, ["KDIC"], NODE_TYPE_KDI_ROOT_SVC);
                add_data_link(kdiclient_id, kdi_kdic_id, LINK_TYPE_SOFTWARE_KDIROOT);
                var kdi_kdiu_id = kdi_kdic_id + "_KDIU";
                add_data_node(kdi_kdiu_id, ["KDIU"], NODE_TYPE_KDI_ROOT_SVC);
                add_data_link(kdi_kdic_id, kdi_kdiu_id, LINK_TYPE_SOFTWARE_KDIROOT);
                var kdi_kdip_id = kdi_kdic_id + "_KDIP";
                add_data_node(kdi_kdip_id, ["KDIP"], NODE_TYPE_KDI_ROOT_SVC);
                add_data_link(kdi_kdic_id, kdi_kdip_id, LINK_TYPE_SOFTWARE_KDIROOT);
            }
        }
        // add kdi client service to pc client nodes (1 pc per chassis, single rack)
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            for (let j=1; j<=TOTAL_CHASSIS; j++) {
                let pc_id = rack_id + "_PC" + j;
                let kdiclient_svc_id = pc_id + "_KDICLIENT_SVC" + 1
                let kdiclient_svc_name = "KDI Client SVC"
                add_data_node(kdiclient_svc_id, [kdiclient_svc_name], NODE_TYPE_KDI_CLIENT_SVC);
            }
        }
        // add kdi client service to pc links for each rack
        var kdi_root_id = "KDIRoot";
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            for (let j=1; j<=TOTAL_CHASSIS; j++) {
                let pc_id = rack_id + "_PC" + j;
                let iols_id = pc_id + "_IOLS" + 1
                let kdiclient_id = pc_id + "_KDICLIENT" + 1
                let kdi_kdic_id = kdiclient_id + "_KDIC";
                let kdiclient_svc_id = pc_id + "_KDICLIENT_SVC" + 1
                add_data_link(kdi_root_id, kdiclient_id, LINK_TYPE_SOFTWARE_KDIROOT);
                add_data_link(kdiclient_id, kdi_kdic_id, LINK_TYPE_SOFTWARE);
                add_data_link(kdi_kdic_id, kdiclient_svc_id, LINK_TYPE_SOFTWARE);
                add_data_link(kdiclient_svc_id, iols_id, LINK_TYPE_SOFTWARE_IOLS);
            }
        }
    }     
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function make_kdi_other() {
    var kdi_other_id = "KDIOther";
    var kdi_root_id = "KDIRoot";
    for (let i=1; i<=TOTAL_OTHER_KDI_CLIENTS; i++) {
        let kdiclient_id = kdi_other_id + "_KDICLIENT" + i
        let kdiclient_name = "KDI Client"
        let names = make_kdi_client_names(kdiclient_name);
        add_data_node(kdiclient_id, names, NODE_TYPE_KDI_CLIENT);
        add_data_link(kdi_root_id, kdiclient_id, LINK_TYPE_SOFTWARE_KDIROOT);

        var total = TOTAL_OTHER_KDI_CLIENTS_SVC;
        if (TOTAL_OTHER_KDI_RANDOMIZE) {
            total = randomIntFromInterval(1, TOTAL_OTHER_KDI_CLIENTS_SVC);
        }
        for (let j=1; j<=total; j++) {
            let kdiclient_svc_id = kdiclient_id + "_KDICLIENT_SVC" + j;
            let kdiclient_svc_name = "KDI Client SVC " + j;
            add_data_node(kdiclient_svc_id, [kdiclient_svc_name], NODE_TYPE_KDI_CLIENT_SVC);
            add_data_link(kdiclient_id, kdiclient_svc_id, LINK_TYPE_SOFTWARE);
        }
    }
}

function make_qcs_host() {
    // consol -> hcl -> ??
    if (RACKS_TYPE == RACKS_TYPE_1000) {
        // add qsc consul to pc host nodes
        let all_id = "All";
        let pchost_id = all_id + "_PCHost" + 1;
        let consul_id = pchost_id + "_Consul" + 1;
        let consul_name = "Consul";
        add_data_node(consul_id, [consul_name], NODE_TYPE_QCS_HOST);
        add_data_link(pchost_id, consul_id, LINK_TYPE_SOFTWARE);
        // add qsc hcl to pc host nodes
        let hcl_id = consul_id + "_HCL" + 1;
        let hcl_name = "HCL";
        add_data_node(hcl_id, [hcl_name], NODE_TYPE_QCS_HOST);
        add_data_link(consul_id, hcl_id, LINK_TYPE_SOFTWARE_QCS_INT);
        // add qsc cli to pc host nodes
        let cli_id = consul_id + "_CLI" + 1;
        let cli_name = "QCS CLI";
        add_data_node(cli_id, [cli_name], NODE_TYPE_QCS_HOST);
        add_data_link(pchost_id, cli_id, LINK_TYPE_SOFTWARE);
        // add qsc hcl config service to pc host nodes
        let hclconfig_id = consul_id + "_HCLConfigSvc" + 0;
        let hclconfig_name = "HCL Config Svc 0";
        add_data_node(hclconfig_id, [hclconfig_name], NODE_TYPE_QCS_HOST);
        // console.log(hclconfig_id + " ---> " + hcl_id);
        add_data_link(hclconfig_id, hcl_id, LINK_TYPE_SOFTWARE_QCS_INT);
        // console.log(cli_id + " ---> " + hclconfig_id);
        add_data_link(cli_id, hclconfig_id, LINK_TYPE_SOFTWARE_QCS_INT);
    }
}

function make_qcs_clients() {
    // ism leader - rack1
    // ism follower - racks2-n
    if (RACKS_TYPE == RACKS_TYPE_1000) {
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC1";
             let ism_id = pc_id + "_ISM" + i;
            let ism_name = "ISM Leader";
            if (i > 1) {
                ism_name = "ISM Follower";
            }
            // add qsc ism to pc client nodes
            add_data_node(ism_id, [ism_name], NODE_TYPE_QCS_CLIENT);
            add_data_link(pc_id, ism_id, LINK_TYPE_SOFTWARE);
            let all_id = "All";
            let pchost_id = all_id + "_PCHost" + 1;
            let consul_id = pchost_id + "_Consul" + 1;
            let cli_id = consul_id + "_CLI" + 1;
            add_data_link(ism_id, consul_id, LINK_TYPE_SOFTWARE_QCS_EXT);
            // add qsc hcl to pc client nodes
            let hcl_id = ism_id + "_HCL" + 1;
            let hcl_name = "HCL";
            add_data_node(hcl_id, [hcl_name], NODE_TYPE_QCS_HOST);
            add_data_link(ism_id, hcl_id, LINK_TYPE_SOFTWARE_QCS_INT);
            // add qsc hcl config service to pc client nodes
            let hclconfig_id = consul_id + "_HCLConfigSvc" + i;
            let hclconfig_name = "HCL Config Svc" + i;
            add_data_node(hclconfig_id, [hclconfig_name], NODE_TYPE_QCS_HOST);
            add_data_link(hcl_id, hclconfig_id, LINK_TYPE_SOFTWARE_QCS_INT);
            add_data_link(cli_id, hclconfig_id, LINK_TYPE_SOFTWARE_QCS_INT);
        }
    }
}

function validate_links() {
    var src_found, tgt_found;
    let links = data.links;
    let nodes = data.nodes;
    for (let j=links.length-1; j>=0; j--) {
        let src_id = links[j].source;
        let tgt_id = links[j].target;
        src_found = 0;
        for (let i=0; i<nodes.length && !src_found; i++) {
            let node = nodes[i];
            if (src_id == node.id) {
                src_found = 1;
            }
        }
        tgt_found = 0;
        for (let i=0; i<nodes.length && !tgt_found; i++) {
            if (tgt_id == nodes[i].id) {
                tgt_found = 1;
            }
        }
        if (!src_found) {
            console.log("link.source not found in nodes: " + src_id);
            console.log(data.links[j])
       } else if (!tgt_found) {
            console.log("link.target not found in nodes: " + tgt_id);
            console.log(data.links[j])
        }
        if (!src_found || !tgt_found) {
            data.links.splice(j, 1);
        }
    }
}

function count_node_stat(tag) {
    let ex = tag + "[0-9]+$"
    var count = 0;
    for (let i=0; i<data.nodes.length; i++) {
        var node = data.nodes[i];
        if (node.id.match(ex)) {
            // DEBUG
            //console.log(node.id);
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

function reset_data() {
    data["nodes"] = [];
    data["links"] = [];
}

function show_data() {
    console.log(JSON.stringify(data, null, 2));
    // DEBUG
    //console.log(JSON.stringify(data).length);
}

function show_stats() {
    console.log("total nodes: " + data.nodes.length);
    console.log("total links: " + data.links.length);
    console.log("total nodes - Racks:   " + count_node_stat("_Rack"));
    console.log("total nodes - PCs:     " + count_node_stat("_PC"));
    // console.log("total nodes - PXIECards: " + count_node_stat("_PXIECard"));
    // console.log("total nodes - PXIEBuses: " + count_node_stat("_PXIEBus"));
    console.log("total nodes - Chassis: " + count_node_stat("_Chassis"));
    console.log("total nodes - Modules: " + count_node_stat("_Module"));
}

function make_vision() {
    console.log('make_vision')
    reset_data();
    
    // GENERATED
    add_data_node("generated_nodes_links", ["generated nodes/links"], NODE_TYPE_ROOT);
    add_data_node("make_data", ["make_data"], NODE_TYPE_ROOT);
    add_data_link("make_data", "generated_nodes_links", LINK_TYPE_ROOT);
    // GENERATED HARDWARE
    add_data_node("make_root", ["make_root"], NODE_TYPE_ROOT);
    add_data_link("make_root", "make_data", LINK_TYPE_ROOT);
    add_data_node("make_racks", ["make_racks"], NODE_TYPE_RACK);
    add_data_link("make_racks", "make_root", LINK_TYPE_RACK);
    add_data_node("make_client_pcs", ["make_client_pcs"], NODE_TYPE_WINDOWSPC_CLIENT);
    add_data_link("make_client_pcs", "make_racks", LINK_TYPE_WINDOWSPC_CLIENT);
    add_data_node("make_host_pcs", ["make_host_pcs"], NODE_TYPE_WINDOWSPC_HOST);
    add_data_link("make_host_pcs", "make_racks", LINK_TYPE_WINDOWSPC_HOST);
    add_data_node("make_chassis", ["make_chassis"], NODE_TYPE_CHASSIS);
    add_data_link("make_chassis", "make_client_pcs", LINK_TYPE_CHASSIS);
    add_data_node("make_slots", ["make_slots"], NODE_TYPE_SLOT);
    add_data_link("make_slots", "make_chassis", LINK_TYPE_SLOT);
    add_data_node("make_modules", ["make_modules"], NODE_TYPE_MODULE);
    add_data_link("make_modules", "make_slots", LINK_TYPE_MODULE);
    add_data_node("make_pxie_cables", ["make_pxie_cables"], NODE_TYPE_PXIECARD);
    add_data_link("make_pxie_cables", "make_modules", LINK_TYPE_PXIECARD);
    add_data_node("make_system_sync_ports", ["make_system_sync_ports"], NODE_TYPE_SSYNC_PORT);
    add_data_link("make_system_sync_ports", "make_pxie_cables", LINK_TYPE_SSYNC_PORT_OUT);
    add_data_node("make_hvi_cables", ["make_hvi_cables"], NODE_TYPE_SSYNC_PORT);
    add_data_link("make_hvi_cables", "make_system_sync_ports", LINK_TYPE_HVICABLE);
    // GENERATED BUSSES
    add_data_node("make_pxie_busses", ["make_pxie_busses"], NODE_TYPE_PXIEBUS);
    add_data_link("make_pxie_busses", "make_client_pcs", LINK_TYPE_PXIEBUS);
    // GENERATED SOFTWARE
    add_data_node("make_iols_and_connection_expert", ["make_iols_and_connection_expert"], NODE_TYPE_IOLS);
    add_data_link("make_iols_and_connection_expert", "make_pxie_busses", LINK_TYPE_SOFTWARE_IOLS);
    add_data_node("make_kdi_root", ["make_kdi_root"], NODE_TYPE_KDI_ROOT);
    add_data_link("make_kdi_root", "make_client_pcs", LINK_TYPE_SOFTWARE_KDIROOT);
    add_data_node("make_kdi_clients", ["make_kdi_clients"], NODE_TYPE_KDI_CLIENT);
    add_data_link("make_kdi_clients", "make_kdi_root", LINK_TYPE_SOFTWARE_KDIPEER);
    add_data_node("make_kdi_other", ["make_kdi_other"], NODE_TYPE_KDI_CLIENT);
    add_data_link("make_kdi_other", "make_kdi_clients", LINK_TYPE_SOFTWARE_KDIPEER);
    add_data_node("make_qcs_host", ["make_qcs_host"], NODE_TYPE_QCS_HOST);
    add_data_link("make_qcs_host", "make_host_pcs", LINK_TYPE_SOFTWARE_QCS_EXT);
    add_data_node("make_qcs_clients", ["make_qcs_clients"], NODE_TYPE_QCS_CLIENT);
    add_data_link("make_qcs_clients", "make_qcs_host", LINK_TYPE_SOFTWARE_QCS_EXT);


    // MODEL from data file
    // NOTE: exercise to investigate how to get information for nodes
    add_data_node("model_nodes_links", ["model nodes/links"], NODE_TYPE_ROOT);
    add_data_node("model_data", ["model_data"], NODE_TYPE_ROOT);
    add_data_link("model_data", "model_nodes_links", LINK_TYPE_ROOT);



    add_data_node("model_qcs", ["model_qcs"], NODE_TYPE_QCS_HOST);
    add_data_link("model_qcs", "model_racks", LINK_TYPE_ROOT);
    add_data_node("model_racks", ["model_racks"], NODE_TYPE_RACK);
    add_data_link("model_racks", "model_data", LINK_TYPE_ROOT);

    // racks - from qcs system definition?
    // pcs - from qcs system definition?
    // chassis - from each iols enumeration, but how?
    // slots - from model of chassis
    // modules - from each iols enumeration, but how?
    // pxie cables - imply from each iols enumeration?
    // ssync ports - from iols enumeation and module types
    // hvi cables - imply from qcs system definition?
    // pxie bus - imply from each iols enumeration?
    // iols - from set of iols enumerations?
    // kdi - from kdi node list, will need to chase fabric
    // qcs - from qcs system definition?


}

function make_data() {

    reset_data();
 
    // HARDWARE
    make_root();
    make_racks();
    make_client_pcs();
    make_host_pcs();
    make_chassis();
    make_slots();
    make_modules();
    make_pxie_cables();
    make_system_sync_ports();
    make_hvi_cables();

    // BUSSES
    make_pxie_busses();

    // SOFTWARE
    make_kdi_gateway();
    make_iols_and_connection_expert();
    make_kdi_root();
    make_kdi_clients();
    make_kdi_other();
    make_qcs_host();
    make_qcs_clients();


    // show_data();         // TODO: add enable flag
    // show_stats();        // TODO: add enable flag
    validate_links();
    show_data();            // TODO: add enable flag
    show_stats();           // TODO: add enable flag
}

function enable_all_nodes() {
    ENABLE_NODE_TYPE_ROOT                = 1;
    ENABLE_NODE_TYPE_RACK                = 1;
    ENABLE_NODE_TYPE_CHASSIS             = 1;
    ENABLE_NODE_TYPE_SLOT                = 1;
    ENABLE_NODE_TYPE_MODULE              = 1;
    ENABLE_NODE_TYPE_WINDOWSPC_CLIENT    = 1;
    ENABLE_NODE_TYPE_WINDOWSPC_HOST      = 1;
    ENABLE_NODE_TYPE_PXIECARD            = 1;
    ENABLE_NODE_TYPE_NETWORKCARD         = 1;
    ENABLE_NODE_TYPE_IOLS                = 1;
    ENABLE_NODE_TYPE_CONNECTION_EXPERT   = 1;
    ENABLE_NODE_TYPE_KDI_ROOT            = 1;
    ENABLE_NODE_TYPE_KDI_ROOT_SVC        = 1;
    ENABLE_NODE_TYPE_KDI_CLIENT          = 1;
    ENABLE_NODE_TYPE_KDI_CLIENT_SVC      = 1;
    ENABLE_NODE_TYPE_QCS_HOST            = 1;
    ENABLE_NODE_TYPE_QCS_CLIENT          = 1;
    ENABLE_NODE_TYPE_SSYNC_PORT          = 1;
    ENABLE_NODE_TYPE_PXIEBUS             = 1;  
    prune_nodes = [];    
}

function disable_all_nodes() {
    ENABLE_NODE_TYPE_ROOT                = 0;
    ENABLE_NODE_TYPE_RACK                = 0;
    ENABLE_NODE_TYPE_CHASSIS             = 0;
    ENABLE_NODE_TYPE_SLOT                = 0;
    ENABLE_NODE_TYPE_MODULE              = 0;
    ENABLE_NODE_TYPE_WINDOWSPC_CLIENT    = 0;
    ENABLE_NODE_TYPE_WINDOWSPC_HOST      = 0;
    ENABLE_NODE_TYPE_PXIECARD            = 0;
    ENABLE_NODE_TYPE_NETWORKCARD         = 0;
    ENABLE_NODE_TYPE_IOLS                = 0;
    ENABLE_NODE_TYPE_CONNECTION_EXPERT   = 0;
    ENABLE_NODE_TYPE_KDI_ROOT            = 0;
    ENABLE_NODE_TYPE_KDI_ROOT_SVC        = 0;
    ENABLE_NODE_TYPE_KDI_CLIENT          = 0;
    ENABLE_NODE_TYPE_KDI_CLIENT_SVC      = 0;
    ENABLE_NODE_TYPE_QCS_HOST            = 0;
    ENABLE_NODE_TYPE_QCS_CLIENT          = 0;
    ENABLE_NODE_TYPE_SSYNC_PORT          = 0;
    ENABLE_NODE_TYPE_PXIEBUS             = 0;  
}

function enable_all_links() {
    ENABLE_LINK_TYPE_ROOT                = 1;
    ENABLE_LINK_TYPE_RACK                = 1;
    ENABLE_LINK_TYPE_CHASSIS             = 1;
    ENABLE_LINK_TYPE_SLOT                = 1;
    ENABLE_LINK_TYPE_MODULE              = 1;
    ENABLE_LINK_TYPE_WINDOWSPC_CLIENT    = 1;
    ENABLE_LINK_TYPE_WINDOWSPC_HOST      = 1;
    ENABLE_LINK_TYPE_PXIECARD            = 1;
    ENABLE_LINK_TYPE_PXIEBACKPLANE       = 1;
    ENABLE_LINK_TYPE_PXIECABLE           = 1;
    ENABLE_LINK_TYPE_NETWORKCABLE        = 1;
    ENABLE_LINK_TYPE_SOFTWARE            = 1;
    ENABLE_LINK_TYPE_SOFTWARE_IOLS       = 1;
    ENABLE_LINK_TYPE_SOFTWARE_KDIROOT    = 1;
    ENABLE_LINK_TYPE_SOFTWARE_KDIPEER    = 1;
    ENABLE_LINK_TYPE_SOFTWARE_QCS_EXT    = 1;
    ENABLE_LINK_TYPE_SOFTWARE_QCS_INT    = 1;
    ENABLE_LINK_TYPE_SSYNC_PORT_IN       = 1;
    ENABLE_LINK_TYPE_SSYNC_PORT_OUT      = 1;
    ENABLE_LINK_TYPE_HVICABLE            = 1;
    ENABLE_LINK_TYPE_PXIEBUS             = 1;
}

function disable_all_links() {
    ENABLE_LINK_TYPE_ROOT                = 0;
    ENABLE_LINK_TYPE_RACK                = 0;
    ENABLE_LINK_TYPE_CHASSIS             = 0;
    ENABLE_LINK_TYPE_SLOT                = 0;
    ENABLE_LINK_TYPE_MODULE              = 0;
    ENABLE_LINK_TYPE_WINDOWSPC_CLIENT    = 0;
    ENABLE_LINK_TYPE_WINDOWSPC_HOST      = 0;
    ENABLE_LINK_TYPE_PXIECARD            = 0;
    ENABLE_LINK_TYPE_PXIEBACKPLANE       = 0;
    ENABLE_LINK_TYPE_PXIECABLE           = 0;
    ENABLE_LINK_TYPE_NETWORKCABLE        = 0;
    ENABLE_LINK_TYPE_SOFTWARE            = 0;
    ENABLE_LINK_TYPE_SOFTWARE_IOLS       = 0;
    ENABLE_LINK_TYPE_SOFTWARE_KDIROOT    = 0;
    ENABLE_LINK_TYPE_SOFTWARE_KDIPEER    = 0;
    ENABLE_LINK_TYPE_SOFTWARE_QCS_EXT    = 0;
    ENABLE_LINK_TYPE_SOFTWARE_QCS_INT    = 0;
    ENABLE_LINK_TYPE_SSYNC_PORT_IN       = 0;
    ENABLE_LINK_TYPE_SSYNC_PORT_OUT      = 0;
    ENABLE_LINK_TYPE_HVICABLE            = 0;
    ENABLE_LINK_TYPE_PXIEBUS             = 0;
}

function select_racks_1000() {
    RACKS_TYPE = RACKS_TYPE_1000;
    TOTAL_RACKS = 10;
    TOTAL_CHASSIS = 6;
    TOTAL_SLOTS = 18;
    TOTAL_PXIECARDS = 3;
}

function select_racks_16x6() {
    RACKS_TYPE = RACKS_TYPE_16x6;
    TOTAL_RACKS = 1;
    TOTAL_CHASSIS = 6;
    TOTAL_SLOTS = 18;
    TOTAL_PXIECARDS = 1;
}

function make_data_1000() {
    console.log('make_data_1000')
    select_racks_1000();
    enable_all_nodes();
    enable_all_links();
    make_data();
}

function make_data_16x6() {
    console.log('make_data_16x6')
    select_racks_16x6();
    enable_all_nodes();
    enable_all_links();   
    make_data();
}

function make_data_hw_only() {
    enable_all_nodes();
    // ENABLE_NODE_TYPE_ROOT                = 0;
    // ENABLE_NODE_TYPE_RACK                = 0;
    // ENABLE_NODE_TYPE_CHASSIS             = 0;
    // ENABLE_NODE_TYPE_SLOT                = 0;
    // ENABLE_NODE_TYPE_MODULE              = 0;
    // ENABLE_NODE_TYPE_WINDOWSPC_CLIENT    = 0;
    // ENABLE_NODE_TYPE_WINDOWSPC_HOST      = 0;
    // ENABLE_NODE_TYPE_PXIECARD            = 0;
    // ENABLE_NODE_TYPE_NETWORKCARD         = 0;
    // ENABLE_NODE_TYPE_IOLS                = 0;
    ENABLE_NODE_TYPE_CONNECTION_EXPERT   = 0;
    ENABLE_NODE_TYPE_KDI_ROOT            = 0;
    ENABLE_NODE_TYPE_KDI_ROOT_SVC        = 0;
    ENABLE_NODE_TYPE_KDI_CLIENT          = 0;
    ENABLE_NODE_TYPE_KDI_CLIENT_SVC      = 0;
    ENABLE_NODE_TYPE_QCS_HOST            = 0;
    ENABLE_NODE_TYPE_QCS_CLIENT          = 0;
    ENABLE_NODE_TYPE_SSYNC_PORT          = 0;
    ENABLE_NODE_TYPE_PXIEBUS             = 0;      
    RACKS_MODIFIED |= RACKS_MODIFIED_HW_ONLY;
    make_data();
}

function is_hw_only(id) {
    if (
        id == NODE_TYPE_ROOT             ||
        id == NODE_TYPE_RACK             ||
        id == NODE_TYPE_CHASSIS          ||
        id == NODE_TYPE_SLOT             ||
        id == NODE_TYPE_MODULE           ||
        id == NODE_TYPE_WINDOWSPC_CLIENT ||
        id == NODE_TYPE_WINDOWSPC_HOST   ||
        id == NODE_TYPE_PXIECARD         ||
        id == NODE_TYPE_NETWORKCARD      ||
        id == NODE_TYPE_IOLS
    ) {
        return true;
    }
    return false;
}

function make_data_sw_only() {
    enable_all_nodes();
    // ENABLE_NODE_TYPE_ROOT                = 0;
    // ENABLE_NODE_TYPE_RACK                = 0;
    ENABLE_NODE_TYPE_CHASSIS             = 0;
    ENABLE_NODE_TYPE_SLOT                = 0;
    ENABLE_NODE_TYPE_MODULE              = 0;
    // ENABLE_NODE_TYPE_WINDOWSPC_CLIENT    = 0;
    // ENABLE_NODE_TYPE_WINDOWSPC_HOST      = 0;
    ENABLE_NODE_TYPE_PXIECARD            = 0;
    ENABLE_NODE_TYPE_NETWORKCARD         = 0;
    // ENABLE_NODE_TYPE_IOLS                = 0;
    // ENABLE_NODE_TYPE_CONNECTION_EXPERT   = 0;
    // ENABLE_NODE_TYPE_KDI_ROOT            = 0;
    // ENABLE_NODE_TYPE_KDI_ROOT_SVC        = 0;
    // ENABLE_NODE_TYPE_KDI_CLIENT          = 0;
    // ENABLE_NODE_TYPE_KDI_CLIENT_SVC      = 0;
    // ENABLE_NODE_TYPE_QCS_HOST            = 0;
    // ENABLE_NODE_TYPE_QCS_CLIENT          = 0;
    // ENABLE_NODE_TYPE_SSYNC_PORT          = 0;
    // ENABLE_NODE_TYPE_PXIEBUS             = 0;
    RACKS_MODIFIED |= RACKS_MODIFIED_SW_ONLY;
    make_data();
}

function is_sw_only(id) {
    if (
        id == NODE_TYPE_ROOT               ||
        id == NODE_TYPE_RACK               ||
        id == NODE_WINDOWSPC_CLIENT        ||
        id == NODE_WINDOWSPC_HOST          ||
        id == NODE_TYPE_IOLS               ||
        id == NODE_TYPE_CONNECTION_EXPERT  ||
        id == NODE_TYPE_KDI_ROOT           ||
        id == NODE_TYPE_KDI_ROOT_SVC       ||
        id == NODE_TYPE_KDI_CLIENT         ||
        id == NODE_TYPE_KDI_CLIENT_SVC     ||
        id == NODE_TYPE_QCS_HOST           ||
        id == NODE_TYPE_QCS_CLIENT         ||
        id == NODE_TYPE_SSYNC_PORT         ||
        id == NODE_TYPE_PXIEBUS
    ) {
        return true;
    }
    return false;
}

function make_data_iols_only() {
    enable_all_nodes();
    // ENABLE_NODE_TYPE_ROOT                = 0;
    // ENABLE_NODE_TYPE_RACK                = 0;
    ENABLE_NODE_TYPE_CHASSIS             = 0;
    ENABLE_NODE_TYPE_SLOT                = 0;
    // ENABLE_NODE_TYPE_MODULE              = 0;
    // ENABLE_NODE_TYPE_WINDOWSPC_CLIENT    = 0;
    // ENABLE_NODE_TYPE_WINDOWSPC_HOST      = 0;
    // ENABLE_NODE_TYPE_PXIECARD            = 0;
    // ENABLE_NODE_TYPE_NETWORKCARD         = 0;
    // ENABLE_NODE_TYPE_IOLS                = 0;
    // ENABLE_NODE_TYPE_CONNECTION_EXPERT   = 0;
    ENABLE_NODE_TYPE_KDI_ROOT            = 0;
    ENABLE_NODE_TYPE_KDI_ROOT_SVC        = 0;
    ENABLE_NODE_TYPE_KDI_CLIENT          = 0;
    ENABLE_NODE_TYPE_KDI_CLIENT_SVC      = 0;
    ENABLE_NODE_TYPE_QCS_HOST            = 0;
    ENABLE_NODE_TYPE_QCS_CLIENT          = 0;
    ENABLE_NODE_TYPE_SSYNC_PORT          = 0;
    // ENABLE_NODE_TYPE_PXIEBUS             = 0;      
    RACKS_MODIFIED |= RACKS_MODIFIED_IOLS_ONLY;
    make_data();
}

function is_iols_only(id) {
    if (
        id == NODE_TYPE_ROOT                ||
        id == NODE_TYPE_RACK                ||
        id == NODE_TYPE_MODULE              ||
        id == NODE_TYPE_WINDOWSPC_CLIENT    ||
        id == NODE_TYPE_WINDOWSPC_HOST      ||
        id == NODE_TYPE_PXIECARD            ||
        id == NODE_TYPE_NETWORKCARD         ||
        id == NODE_TYPE_IOLS                ||
        id == NODE_TYPE_CONNECTION_EXPERT   ||
        id == NODE_TYPE_PXIEBUS      
    ) {
        return true;
    }
    return false;
}

function make_data_kdi_only() {
    enable_all_nodes();
    // ENABLE_NODE_TYPE_ROOT                = 0;
    // ENABLE_NODE_TYPE_RACK                = 0;
    ENABLE_NODE_TYPE_CHASSIS             = 0;
    ENABLE_NODE_TYPE_SLOT                = 0;
    ENABLE_NODE_TYPE_MODULE              = 0;
    // ENABLE_NODE_TYPE_WINDOWSPC_CLIENT    = 0;
    // ENABLE_NODE_TYPE_WINDOWSPC_HOST      = 0;
    ENABLE_NODE_TYPE_PXIECARD            = 0;
    // ENABLE_NODE_TYPE_NETWORKCARD         = 0;
    // ENABLE_NODE_TYPE_IOLS                = 0;
    ENABLE_NODE_TYPE_CONNECTION_EXPERT   = 0;
    // ENABLE_NODE_TYPE_KDI_ROOT            = 0;
    // ENABLE_NODE_TYPE_KDI_ROOT_SVC        = 0;
    // ENABLE_NODE_TYPE_KDI_CLIENT          = 0;
    // ENABLE_NODE_TYPE_KDI_CLIENT_SVC      = 0;
    ENABLE_NODE_TYPE_QCS_HOST            = 0;
    ENABLE_NODE_TYPE_QCS_CLIENT          = 0;
    ENABLE_NODE_TYPE_SSYNC_PORT          = 0;
    ENABLE_NODE_TYPE_PXIEBUS             = 0;       
    RACKS_MODIFIED |= RACKS_MODIFIED_KDI_ONLY;
    make_data();
}

function is_kdi_only(id) {
    if (
        id == NODE_TYPE_ROOT                ||
        id == NODE_TYPE_RACK                ||
        id == NODE_TYPE_WINDOWSPC_CLIENT    ||
        id == NODE_TYPE_WINDOWSPC_HOST      ||
        id == NODE_TYPE_NETWORKCARD         ||
        id == NODE_TYPE_IOLS                ||
        id == NODE_TYPE_KDI_ROOT            ||
        id == NODE_TYPE_KDI_ROOT_SVC        ||
        id == NODE_TYPE_KDI_CLIENT          ||
        id == NODE_TYPE_KDI_CLIENT_SVC
    ) {
        return true;
    }
    return false;
}

function make_data_qcs_only() {
    enable_all_nodes();
    // ENABLE_NODE_TYPE_ROOT                = 0;
    // ENABLE_NODE_TYPE_RACK                = 0;
    ENABLE_NODE_TYPE_CHASSIS             = 0;
    ENABLE_NODE_TYPE_SLOT                = 0;
    // ENABLE_NODE_TYPE_MODULE              = 0;
    // ENABLE_NODE_TYPE_WINDOWSPC_CLIENT    = 0;
    // ENABLE_NODE_TYPE_WINDOWSPC_HOST      = 0;
    ENABLE_NODE_TYPE_PXIECARD            = 0;
    // ENABLE_NODE_TYPE_NETWORKCARD         = 0;
    ENABLE_NODE_TYPE_IOLS                = 0;
    ENABLE_NODE_TYPE_CONNECTION_EXPERT   = 0;
    ENABLE_NODE_TYPE_KDI_ROOT            = 0;
    ENABLE_NODE_TYPE_KDI_ROOT_SVC        = 0;
    ENABLE_NODE_TYPE_KDI_CLIENT          = 0;
    ENABLE_NODE_TYPE_KDI_CLIENT_SVC      = 0;
    // ENABLE_NODE_TYPE_QCS_HOST            = 0;
    // ENABLE_NODE_TYPE_QCS_CLIENT          = 0;
    // ENABLE_NODE_TYPE_SSYNC_PORT          = 0;
    // ENABLE_NODE_TYPE_PXIEBUS             = 0;   
    RACKS_MODIFIED |= RACKS_MODIFIED_QCS_ONLY;
    make_data();
}

function is_qcs_only(id) {
    if (
        id == NODE_TYPE_ROOT                ||
        id == NODE_TYPE_RACK                ||
        id == NODE_TYPE_MODULE              ||
        id == NODE_TYPE_WINDOWSPC_CLIENT    ||
        id == NODE_TYPE_WINDOWSPC_HOST      ||
        id == NODE_TYPE_NETWORKCARD         ||
        id == NODE_TYPE_QCS_HOST            ||
        id == NODE_TYPE_QCS_CLIENT          ||
        id == NODE_TYPE_SSYNC_PORT          ||
        id == NODE_TYPE_PXIEBUS  
    ) {
        return true;
    }
    return false;
}

function make_data_racks_count() {
    // enable_all_nodes();
    TOTAL_RACKS -= 1;
    RACKS_MODIFIED |= RACKS_MODIFIED_CUSTOM;
    if (TOTAL_RACKS <= 0) {
        if (RACKS_TYPE == RACKS_TYPE_1000) {
            TOTAL_RACKS = 10;
        }
        if (RACKS_TYPE == RACKS_TYPE_16x6) {
            TOTAL_RACKS = 1;
        }
        RACKS_MODIFIED &= ~RACKS_MODIFIED_CUSTOM;
    }
    make_data();
}

function make_data_chassis_count() {
    // enable_all_nodes();
    TOTAL_CHASSIS -= 1;
    RACKS_MODIFIED |= RACKS_MODIFIED_CUSTOM;
    if (TOTAL_CHASSIS < 0) {
        TOTAL_CHASSIS = 6;
        RACKS_MODIFIED &= ~RACKS_MODIFIED_CUSTOM;
    }
    make_data();
}

function prune_slots() {
    // get all slots
    var all_slots = [];
    let ex = "_Slot" + "[0-9]+$"
    for (let i=0; i<data.nodes.length; i++) {
        var node = data.nodes[i];
        if (node.id.match(ex)) {
            all_slots.push(node.id);
        }
    }
    // get all modules
    var all_modules = [];
    ex = "_Module" + "[0-9]+$"
    for (let i=0; i<data.nodes.length; i++) {
        var node = data.nodes[i];
        if (node.id.match(ex)) {
            all_modules.push(node.id);
        }
    }
    // add any slots without a module to pruned_nodes
    for (let i=0; i<all_slots.length; i++) {
        var slot_id = all_slots[i];
        var found = 0;
        for (let j=0; j<all_modules.length && !found; j++) {
            var module_id = all_modules[j];
            if (module_id.includes(slot_id)) {
                found = 1;
            }
        }
        if (found == 0) {
            prune_nodes.push(slot_id);
        }   
    }
    RACKS_MODIFIED |= RACKS_MODIFIED_PRUNED_SLOTS;
    make_data();
}

function prune_ssync() {
    // get all ssync ports
    var all_ssync_ports = [];
    let ex = "_SSyncPort" + "[0-9]+$"
    for (let i=0; i<data.nodes.length; i++) {
        var node = data.nodes[i];
        if (node.id.match(ex)) {
            all_ssync_ports.push(node.id);
        }
    }
    // get all ssync port links
    var all_ssync_links = [];
    ex = "_Module" + "[0-9]+$"
    for (let i=0; i<data.links.length; i++) {
        var link = data.links[i];
        if (link.value == LINK_TYPE_SSYNC_PORT_IN 
            || link.value == LINK_TYPE_SSYNC_PORT_OUT) {
            var str = node.source + "__" + node.target;
            all_ssync_links.push(str);
        }
    }
    // add any ssync ports without a link to pruned_nodes
    for (let i=0; i<all_ssync_ports.length; i++) {
        var ssync_port_id = all_ssync_ports[i];
        var found = 0;
        for (let j=0; j<all_ssync_links.length && !found; j++) {
            var str = all_ssync_links[j];
            if (str.includes(ssync_port_id)) {
                found = 1;
            }
        }
        if (found == 0) {
            prune_nodes.push(ssync_port_id);
        }   
    }   
    RACKS_MODIFIED |= RACKS_MODIFIED_PRUNED_SSYNC;
    make_data();
}

// NOTE: defining specfic colors works with a couple issues
//       the color we picked anre not as vibrant, and
//       some colors are not recognized.  Reverting to auto for now.
// from https://www.pinterest.co.uk/pin/46795283603992997/
var node_colors = [
    "white",
    // "pear",
    "lime",
    // "yellowgreen",
    // "beige",
    // "khaki",
    // "olive",
    // "umber",
    // "ivory",
    // "lemon",
    "yellow",
    // "gold",
    // "cream",
    // "amber",
    "goldenrod",
    // "ocher",
    // "bisque",
    // "tan",
    // "bronze",
    // "sepia",
    // "brown",
    // "champagne",
    // "apricot",
    "orange",
    // "copper",
    // "salmon",
    // "redorange",
    // "rust",
    // "sienna",
    // "seashell",
    // "peach",
    "coral",
    // "indianread",
    "pink",
    "red",
    // "carmine",
    // "marroon",
    // "mistyrose",
    // "oldrose",
    // "rosybrown",
    // "rosewood",
    // "palelink",
    // "cerise",
    "ruby",
    // "crimson",
    // "rosepink",
    "magenta",
    // "redviolet",
    // "plum",
    // "violet",
    "fuchsia",
    "purple",
    // "eggplant",
    // "lavender",
    // "amethyst",
    "blueviolet",
    // "indigo",
    // "babyblue",
    "skyblue",
    "blue",
    // "ultramarine",
    // "paleblue",
    "azure",
    // "cerulean",
    // "steelblue",
    "aqua",
    // "turquoise",
    // "seagreen",
    "aquamarine",
    // "emerald",
    // "jade",
    "palegreen",
    // "applegreen",
    "green",
    // "forestgreen",
    // "celadon",
    // "sage",
    // "slate",
    // "mauve",
    // "taupe",
    // "silver",
    // "grey",
];


function node_color(group) {
    var result;
    var index = group % node_colors.length;
    result = node_colors[index];
    return result;
}

function link_color(value) {
    var result;
    var index = value % node_colors.length;
    result = node_colors[index];
    return result;
}

// function node_opacity(id) {
//     var result = 1.0;
//     if (is_hw_only(id)) result = NODE_OPACITY_HW;
//     if (is_sw_only(id)) result = NODE_OPACITY_SW;
//     if (is_iols_only(id)) result = NODE_OPACITY_IOLS;
//     if (is_kdi_only(id)) result = NODE_OPACITY_KDI;
//     if (is_qcs_only(id)) result = NODE_OPACITY_QCS;
//     return result;
// }

// function link_opacity(link) {
//     var result = NODE_OPACITY_HW;

//     switch (link.source.id) {

//     }
//     // TODO: determine if source is hw/sw/iols/kdi/qcs
//     //       search data.nodes for source
//     //       use that to determine hw/sw/iols/kdi/qcs
//     //       from hw/sw/iols/kdi/qcs get current opacity
//     return result;
// }

// function node_opacity_change_hw() {
//     NODE_OPACITY_HW -= 0.1;
//     if (NODE_OPACITY_HW < 0) NODE_OPACITY_HW = 1.0;
//     return NODE_OPACITY_HW;
// }

// function node_opacity_change_sw() {
//     NODE_OPACITY_SW -= 0.1;
//     if (NODE_OPACITY_SW < 0) NODE_OPACITY_SW = 1.0;
//     return NODE_OPACITY_SW;
// }

// function node_opacity_change_iols() {
//     NODE_OPACITY_IOLS -= 0.1;
//     if (NODE_OPACITY_IOLS < 0) NODE_OPACITY_IOLS = 1.0;
//     return NODE_OPACITY_IOLS;
// }

// function node_opacity_change_kdi() {
//     NODE_OPACITY_KDI -= 0.1;
//     if (NODE_OPACITY_KDI < 0) NODE_OPACITY_KDI = 1.0;
//     return NODE_OPACITY_KDI;
// }

// function node_opacity_change_qcs() {
//     NODE_OPACITY_QCS -= 0.1;
//     if (NODE_OPACITY_QCS < 0) NODE_OPACITY_QCS = 1.0;
//     return NODE_OPACITY_QCS;
// }

// function link_opacity_change_hw() {
//     LINK_OPACITY_HW -= 0.1;
//     if (LINK_OPACITY_HW < 0) LINK_OPACITY_HW = 1.0;
//     return LINK_OPACITY_HW;
// }

// function link_opacity_change_sw() {
//     LINK_OPACITY_SW -= 0.1;
//     if (LINK_OPACITY_SW < 0) LINK_OPACITY_SW = 1.0;
//     return LINK_OPACITY_SW;
// }

// function link_opacity_change_iols() {
//     LINK_OPACITY_IOLS -= 0.1;
//     if (LINK_OPACITY_IOLS < 0) LINK_OPACITY_IOLS = 1.0;
//     return LINK_OPACITY_IOLS;
// }

// function link_opacity_change_kdi() {
//     LINK_OPACITY_KDI -= 0.1;
//     if (LINK_OPACITY_KDI < 0) LINK_OPACITY_KDI = 1.0;
//     return LINK_OPACITY_KDI;
// }

// function link_opacity_change_qcs() {
//     LINK_OPACITY_QCS -= 0.1;
//     if (LINK_OPACITY_QCS < 0) LINK_OPACITY_QCS = 1.0;
//     return LINK_OPACITY_QCS;
// }


// Default
// make_data_1000();
make_data_16x6();
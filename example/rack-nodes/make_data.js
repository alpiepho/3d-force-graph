var data = {};

const RACKS_TYPE_1000   = "1000"
const RACKS_TYPE_16x6   = "16x6"
var RACKS_TYPE          = RACKS_TYPE_1000;
var TOTAL_RACKS         = 10;
var TOTAL_CHASSIS       = 6;
var TOTAL_SLOTS         = 18;
var TOTAL_PCIECARDS     = 3;
var RACKS_MODIFIED      = 0;

var TOTAL_OTHER_KDI_CLIENTS = 5;
var TOTAL_OTHER_KDI_CLIENTS_SVC = 2;
//var TOTAL_OTHER_KDI_CLIENTS_SVC = 10; // better for random
var TOTAL_OTHER_KDI_RANDOMIZE = 0;

const NODE_TYPE_ROOT                = 0;  // root, or set of racks
const NODE_TYPE_RACK                = 1;  // physical rack
const NODE_TYPE_CHASSIS             = 2;  // physical chassis within a rack
const NODE_TYPE_SLOT                = 3;  // physical slot within a chassis (1 is special, 19 is special)
const NODE_TYPE_MODULE              = 4;  // physical module inserted in slot, may take more than 1 slot
const NODE_TYPE_WINDOWSPC_CLIENT    = 5;  // PC to run IOLS and TSE software client
const NODE_TYPE_WINDOWSPC_HOST      = 6;  // PC to run TSE software host
const NODE_TYPE_PCIECARD            = 7;  // each client PC can have up to 3 PCIE (M9048A) cards
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

// NOTE: no need for this
const LINK_TYPE_ROOT                = 0;  // root, or set of racks
const LINK_TYPE_RACK                = 1;  // physical rack
const LINK_TYPE_CHASSIS             = 2;  // physical chassis within a rack
const LINK_TYPE_SLOT                = 3;  // physical slot within a chassis (1 is special, 19 is special)
const LINK_TYPE_MODULE              = 4;  // physical module inserted in slot, may take more than 1 slot
const LINK_TYPE_WINDOWSPC_CLIENT    = 5;  // PC to run IOLS and TSE software client
const LINK_TYPE_WINDOWSPC_HOST      = 6;  // PC to run TSE software host
const LINK_TYPE_PCIECARD            = 7;  // each client PC can have up to 3 PCIE (M9048A) cards
const LINK_TYPE_PCIEBACKPLANE       = 108;  // PCIE bus within the chassis
const LINK_TYPE_PCIECABLE           = 109;  // cable from PCIE_CONNECTOR to system controller MODULE
const LINK_TYPE_NETWORKCABLE        = 110; // TODO: is this how to show network?
const LINK_TYPE_SOFTWARE            = 11;  // instance of IOLS libraries per client PC
const LINK_TYPE_SOFTWARE_IOLS       = 12;
const LINK_TYPE_SOFTWARE_KDIROOT    = 13;
const LINK_TYPE_SOFTWARE_KDIPEER    = 14;
const LINK_TYPE_SOFTWARE_QCS_EXT    = 15;
const LINK_TYPE_SOFTWARE_QCS_INT    = 16;
// const LINK_TYPE_HVICABLE            = x; // cable between M9032A/ M9033A modules (HVI bus)
// const LINK_TYPE_IOLS
// const const LINK_TYPE_PCIEADDR
// const LINK_TYPE_HVIADDR
// const LINK_TYPE_NETWORKADDR

var ENABLE_NODE_TYPE_ROOT                = 1;
var ENABLE_NODE_TYPE_RACK                = 1;
var ENABLE_NODE_TYPE_CHASSIS             = 1;
var ENABLE_NODE_TYPE_SLOT                = 1;
var ENABLE_NODE_TYPE_MODULE              = 1;
var ENABLE_NODE_TYPE_WINDOWSPC_CLIENT    = 1;
var ENABLE_NODE_TYPE_WINDOWSPC_HOST      = 1;
var ENABLE_NODE_TYPE_PCIECARD            = 1;
// NOTE: skipping nodes for network cards, might need for DII
// var ENABLE_NODE_TYPE_NETWORKCARD       = 1;
var ENABLE_NODE_TYPE_IOLS                = 1;
var ENABLE_NODE_TYPE_CONNECTION_EXPERT   = 1;
var ENABLE_NODE_TYPE_KDI_ROOT            = 1;
var ENABLE_NODE_TYPE_KDI_ROOT_SVC        = 1;
var ENABLE_NODE_TYPE_KDI_CLIENT          = 1;
var ENABLE_NODE_TYPE_KDI_CLIENT_SVC      = 1;
var ENABLE_NODE_TYPE_QCS_HOST            = 1;
var ENABLE_NODE_TYPE_QCS_CLIENT          = 1;

// NOTE: no need for this
// var ENABLE_LINK_TYPE_ROOT                = 1;
var ENABLE_LINK_TYPE_RACK                = 1;
var ENABLE_LINK_TYPE_CHASSIS             = 1;
var ENABLE_LINK_TYPE_SLOT                = 1;
var ENABLE_LINK_TYPE_MODULE              = 1;
var ENABLE_LINK_TYPE_WINDOWSPC_CLIENT    = 1;
var ENABLE_LINK_TYPE_WINDOWSPC_HOST      = 1;
var ENABLE_LINK_TYPE_PCIECARD            = 1;
var ENABLE_LINK_TYPE_PCIEBACKPLANE       = 1;
var ENABLE_LINK_TYPE_PCIECABLE           = 1;
var ENABLE_LINK_TYPE_NETWORKCABLE        = 1;
var ENABLE_LINK_TYPE_SOFTWARE            = 1;
var ENABLE_LINK_TYPE_SOFTWARE_IOLS       = 1;
var ENABLE_LINK_TYPE_SOFTWARE_KDIROOT    = 1;
var ENABLE_LINK_TYPE_SOFTWARE_KDIPEER    = 1;
var ENABLE_LINK_TYPE_SOFTWARE_QCS_EXT    = 1;
var ENABLE_LINK_TYPE_SOFTWARE_QCS_INT    = 1;
// var ENABLE_LINK_TYPE_HVICABLE            = 1;
// var ENABLE_LINK_TYPE_IOLS                = 1;
// var ENABLE_LINK_TYPE_PCIEADDR            = 1;
// var ENABLE_LINK_TYPE_HVIADDR             = 1;
// var ENABLE_LINK_TYPE_NETWORKADDR         = 1;

function select_racks_1000() {
    RACKS_TYPE = RACKS_TYPE_1000;
    TOTAL_RACKS = 10;
    TOTAL_CHASSIS = 6;
    TOTAL_SLOTS = 18;
    TOTAL_PCIECARDS = 3;
}

function select_racks_16x6() {
    RACKS_TYPE = RACKS_TYPE_16x6;
    TOTAL_RACKS = 1;
    TOTAL_CHASSIS = 6;
    TOTAL_SLOTS = 18;
    TOTAL_PCIECARDS = 1;
}

function enable_limited_system() {
    TOTAL_RACKS = 2;
    TOTAL_CHASSIS = 2;
    TOTAL_SLOTS = 18;
    TOTAL_PCIECARDS = 3;
    RACKS_MODIFIED |= 1;
}

function enable_software_only() {
    ENABLE_NODE_TYPE_ROOT                = 1;
    ENABLE_NODE_TYPE_RACK                = 1;
    ENABLE_NODE_TYPE_CHASSIS             = 0;
    ENABLE_NODE_TYPE_SLOT                = 0;
    ENABLE_NODE_TYPE_MODULE              = 0;
    ENABLE_NODE_TYPE_WINDOWSPC_CLIENT    = 1;
    ENABLE_NODE_TYPE_WINDOWSPC_HOST      = 1;
    ENABLE_NODE_TYPE_PCIECARD            = 0;
    // NOTE: skipping nodes for network cards, might need for DII
    ENABLE_NODE_TYPE_NETWORKCARD        = 1;
    ENABLE_NODE_TYPE_IOLS                = 1;
    ENABLE_NODE_TYPE_CONNECTION_EXPERT   = 1;
    ENABLE_NODE_TYPE_KDI_ROOT            = 1;
    ENABLE_NODE_TYPE_KDI_ROOT_SVC        = 1;
    ENABLE_NODE_TYPE_KDI_CLIENT          = 1;
    ENABLE_NODE_TYPE_KDI_CLIENT_SVC      = 1;
    ENABLE_NODE_TYPE_QCS_CLIENT          = 1;
    ENABLE_NODE_TYPE_QCS_HOST            = 1;
    RACKS_MODIFIED |= 2;
}

function enable_kdi_only() {
    enable_software_only();
    ENABLE_NODE_TYPE_RACK                = 0;
    ENABLE_LINK_TYPE_WINDOWSPC_CLIENT    = 0;
    ENABLE_LINK_TYPE_WINDOWSPC_HOST      = 0;

    ENABLE_NODE_TYPE_QCS_CLIENT          = 0;
    ENABLE_NODE_TYPE_QCS_HOST            = 0;

    RACKS_MODIFIED |= 4;
}

function enable_qcs_only() {
    enable_software_only();
    ENABLE_NODE_TYPE_RACK                = 0;
    ENABLE_LINK_TYPE_WINDOWSPC_CLIENT    = 0;
    ENABLE_LINK_TYPE_WINDOWSPC_HOST      = 0;
    ENABLE_LINK_TYPE_NETWORKCABLE        = 0;

    ENABLE_NODE_TYPE_IOLS                = 0;
    ENABLE_NODE_TYPE_CONNECTION_EXPERT   = 0;
    ENABLE_NODE_TYPE_KDI_ROOT            = 0;
    ENABLE_NODE_TYPE_KDI_ROOT_SVC        = 0;
    ENABLE_NODE_TYPE_KDI_CLIENT          = 0;
    ENABLE_NODE_TYPE_KDI_CLIENT_SVC      = 0;

    RACKS_MODIFIED |= 8;
}

function add_data_node(id, names, group) {
    // filter here
    if (group == NODE_TYPE_ROOT                 && ENABLE_NODE_TYPE_ROOT                == 0) return;
    if (group == NODE_TYPE_RACK                 && ENABLE_NODE_TYPE_RACK                == 0) return;
    if (group == NODE_TYPE_CHASSIS              && ENABLE_NODE_TYPE_CHASSIS             == 0) return;
    if (group == NODE_TYPE_SLOT                 && ENABLE_NODE_TYPE_SLOT                == 0) return;
    if (group == NODE_TYPE_MODULE               && ENABLE_NODE_TYPE_MODULE              == 0) return;
    if (group == NODE_TYPE_WINDOWSPC_CLIENT     && ENABLE_NODE_TYPE_WINDOWSPC_CLIENT    == 0) return;
    if (group == NODE_TYPE_WINDOWSPC_HOST       && ENABLE_NODE_TYPE_WINDOWSPC_HOST      == 0) return;
    if (group == NODE_TYPE_PCIECARD             && ENABLE_NODE_TYPE_PCIECARD            == 0) return;
    if (group == NODE_TYPE_NETWORKCARD          && ENABLE_NODE_TYPE_NETWORKCARD         == 0) return;
    if (group == NODE_TYPE_IOLS                 && ENABLE_NODE_TYPE_IOLS                == 0) return;
    if (group == NODE_TYPE_CONNECTION_EXPERT    && ENABLE_NODE_TYPE_CONNECTION_EXPERT   == 0) return;
    if (group == NODE_TYPE_KDI_ROOT             && ENABLE_NODE_TYPE_KDI_ROOT            == 0) return;
    if (group == NODE_TYPE_KDI_ROOT_SVC         && ENABLE_NODE_TYPE_KDI_ROOT_SVC        == 0) return;
    if (group == NODE_TYPE_KDI_CLIENT           && ENABLE_NODE_TYPE_KDI_CLIENT          == 0) return;
    if (group == NODE_TYPE_KDI_CLIENT_SVC       && ENABLE_NODE_TYPE_KDI_CLIENT_SVC      == 0) return;
    if (group == NODE_TYPE_QCS_HOST             && ENABLE_NODE_TYPE_QCS_HOST            == 0) return;
    if (group == NODE_TYPE_QCS_CLIENT           && ENABLE_NODE_TYPE_QCS_CLIENT          == 0) return;

    // DEBUG
    //names.unshift(id);

    data.nodes.push({"id": id, "names": names, "group": group});
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
    if (value == LINK_TYPE_PCIECARD         && ENABLE_LINK_TYPE_PCIECARD            == 0) return;
    if (value == LINK_TYPE_PCIEBACKPLANE    && ENABLE_LINK_TYPE_PCIEBACKPLANE       == 0) return;
    if (value == LINK_TYPE_PCIECABLE        && ENABLE_LINK_TYPE_PCIECABLE           == 0) return;
    if (value == LINK_TYPE_NETWORKCABLE     && ENABLE_LINK_TYPE_NETWORKCABLE        == 0) return;
    if (value == LINK_TYPE_SOFTWARE         && ENABLE_LINK_TYPE_SOFTWARE            == 0) return;
    if (value == LINK_TYPE_SOFTWARE_IOLS    && ENABLE_LINK_TYPE_SOFTWARE_IOLS       == 0) return;
    if (value == LINK_TYPE_SOFTWARE_KDIROOT && ENABLE_LINK_TYPE_SOFTWARE_KDIROOT    == 0) return;
    if (value == LINK_TYPE_SOFTWARE_KDIPEER && ENABLE_LINK_TYPE_SOFTWARE_KDIPEER    == 0) return;
    if (value == LINK_TYPE_SOFTWARE_QCS_EXT && ENABLE_LINK_TYPE_SOFTWARE_QCS_EXT    == 0) return;
    if (value == LINK_TYPE_SOFTWARE_QCS_INT && ENABLE_LINK_TYPE_SOFTWARE_QCS_INT    == 0) return;
    // if (value == LINK_TYPE_HVICABLE      && ENABLE_LINK_TYPE_HVICABLE            == 0) return;
    // if (value == LINK_TYPE_IOLS          && ENABLE_LINK_TYPE_IOLS                == 0) return;
    // if (value == LINK_TYPE_PCIEADDR      && ENABLE_LINK_TYPE_PCIEADDR            == 0) return;
    // if (value == LINK_TYPE_HVIADDR       && ENABLE_LINK_TYPE_HVIADDR             == 0) return;
    // if (value == LINK_TYPE_NETWORKADDR   && ENABLE_LINK_TYPE_NETWORKADDR         == 0) return;

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
            add_data_link(system_controller_id, module_id, LINK_TYPE_PCIEBACKPLANE);
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
        add_data_link(pciecard_id, module_id, LINK_TYPE_PCIECABLE);
        chassis_count++;
    }
    // pciecard1 -> all_rackX_chassis2_slot1_module1 (system controller for chassis)
    pciecard_id = pc_id + "_PCIECard" + 1;
    module_id = rack_id + "_Chassis2_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        add_data_link(pciecard_id, module_id, LINK_TYPE_PCIECABLE);
        chassis_count++;
    }
    // pciecard2 -> all_rackX_chassis3_slot1_module1 (system controller for chassis)
    pciecard_id = pc_id + "_PCIECard" + 2;
    module_id = rack_id + "_Chassis3_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        add_data_link(pciecard_id, module_id, LINK_TYPE_PCIECABLE);
        chassis_count++;
    }
    // pciecard2 -> all_rackX_chassis4_slot1_module1 (system controller for chassis)
    pciecard_id = pc_id + "_PCIECard" + 2;
    module_id = rack_id + "_Chassis4_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        add_data_link(pciecard_id, module_id, LINK_TYPE_PCIECABLE);
        chassis_count++;
    }
    // pciecard3 -> all_rackX_chassis5_slot1_module1 (system controller for chassis)
    pciecard_id = pc_id + "_PCIECard" + 3;
    module_id = rack_id + "_Chassis5_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        add_data_link(pciecard_id, module_id, LINK_TYPE_PCIECABLE);
        chassis_count++;
    }
    // pciecard3 -> all_rackX_chassis6_slot1_module1 (system controller for chassis)
    pciecard_id = pc_id + "_PCIECard" + 3;
    module_id = rack_id + "_Chassis6_Slot1_Module1";
    if (chassis_count < TOTAL_CHASSIS) {
        add_data_link(pciecard_id, module_id, LINK_TYPE_PCIECABLE);
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
        add_data_link(pciecard_id, module_id, LINK_TYPE_PCIECABLE);
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
    if (RACKS_MODIFIED & 0x01) {
        names.push("DEBUG - modified");
    }
    if (RACKS_MODIFIED & 0x02) {
        names.push("SOFTWARE ONLY");
    }
    if (RACKS_MODIFIED & 0x04) {
        names.push("KDI ONLY");
    }
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

        // WINDOWS PC CLIENT PCIECARD
        // add pc client pciecard nodes
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC1";
            for (let j=1; j<=TOTAL_PCIECARDS; j++) {
                let pciecard_id = pc_id + "_PCIECard" + j;
                let pciecard_name = "PCIECard " + j
                add_data_node(pciecard_id, [pciecard_name], NODE_TYPE_PCIECARD);
            }
        }
        // add pciecard links for each pcard
        for (let i=1; i<=TOTAL_RACKS; i++) {
            let rack_id = "All_Rack" + i;
            let pc_id = rack_id + "_PC1";
            for (let j=1; j<=TOTAL_PCIECARDS; j++) {
                let pciecard_id = pc_id + "_PCIECard" + j;
                add_data_link(pc_id, pciecard_id, LINK_TYPE_PCIECARD);
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
                    add_data_node(pciecard_id, [pciecard_name], NODE_TYPE_PCIECARD);
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
                    add_data_link(pc_id, pciecard_id, LINK_TYPE_PCIECARD);
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

function make_pcie_cables() {
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
function trunc_name(full) {
    var result = full;
    if (result.length > 16) {
        result = full.slice(0,16) + "...";
    }
    return result;
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

    names = [];
    names.push("KDIS");
    names.push("Hydra");
    var kdi_root_kdis_id = kdi_root_id + "_KDIS";
    add_data_node(kdi_root_kdis_id, names, NODE_TYPE_KDI_ROOT_SVC);
    add_data_link(kdi_root_id, kdi_root_kdis_id, LINK_TYPE_SOFTWARE_KDIROOT);
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
                let kdiclient_svc_id = pc_id + "_KDICLIENT_SVC" + 1
                add_data_link(kdi_root_id, kdiclient_id, LINK_TYPE_SOFTWARE_KDIROOT);
                add_data_link(kdiclient_id, kdiclient_svc_id, LINK_TYPE_SOFTWARE);
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
        console.log(hclconfig_id + " ---> " + hcl_id);
        add_data_link(hclconfig_id, hcl_id, LINK_TYPE_SOFTWARE_QCS_INT);
        console.log(cli_id + " ---> " + hclconfig_id);
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
 
    select_racks_1000();
    // select_racks_16x6();

    // uses RACKS_MODIFIED
    enable_limited_system();
    // enable_software_only();
    // enable_kdi_only();
    // enable_qcs_only();

    // HARDWARE
    make_root();
    make_racks();
    make_client_pcs();
    make_host_pcs();
    make_chassis();
    make_slots();
    make_modules();
    make_pcie_cables();
    // make_hvi_cables();

    // BUSSES
    // make_pc_addrs();
    // make_pcie_addrs();
    // make_hvi_addrs();

    // SOFTWARE
    make_iols_and_connection_expert();
    make_kdi_root();
    make_kdi_clients();
    make_kdi_other();
    make_qcs_host();
    make_qcs_clients();
 
    //console.log(JSON.stringify(data, null, 2));
    show_stats();
    validate_links();
    //console.log(JSON.stringify(data, null, 2));
    show_stats();
}

make_data();
window.RUN_CARD_DATA = {
  "sourceFile": "C:\\Users\\25902\\Desktop\\2026-EVG run card for broken sample.xlsx",
  "generatedAt": "2026-05-21",
  "sections": [
    {
      "id": "step-1",
      "sourceSheet": "PGaN-EVG",
      "sourceRow": 2,
      "title": "Step1. Alignment Key Etch (clear)",
      "name": "Alignment Key Etch (clear)",
      "tone": "clear",
      "defaultRecipeId": "track-pfi38",
      "steps": [
        {
          "id": "step-1-r4",
          "sourceRow": 4,
          "no": "1",
          "name": "Prepare 2.5cm * 2.5cm Sample",
          "recipe": "",
          "params": "Laser cutting",
          "machine": "",
          "condition": "",
          "note": "track\u78ba\u8a8d\u662f\u5426\u53ef\u653e\u5165\u8f09\u5177\u4e0d\u6703\u6389\u51fa\u4f86",
          "type": "process",
          "enabled": true
        },
        {
          "id": "step-1-r5",
          "sourceRow": 5,
          "no": "2",
          "name": "Wafer clean",
          "recipe": "",
          "params": "ACE(\u97075min) \u2014>DIwater->IPA(\u97075min)->DIwater",
          "machine": "\u5316\u5b78\u5be6\u9a57\u5ba4",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-1-r6",
          "sourceRow": 6,
          "no": "3",
          "name": "Remove native oxide",
          "recipe": "",
          "params": "pure BOE clean (2min)",
          "machine": "C06-03",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-1-r7",
          "sourceRow": 7,
          "no": "4",
          "name": "Coating HMDS(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "#31",
          "params": "90\u2103 / 30 sec",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-1-r8",
          "sourceRow": 8,
          "no": "",
          "name": "Coating PFI38 (track\u9ede\u9078P-COT-PFI38)",
          "recipe": "",
          "params": "1400rpm / 40 sec (850 nm)",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-1-r9",
          "sourceRow": 9,
          "no": "",
          "name": "Soft bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "",
          "params": "90\u2103 / 60 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-1-r10",
          "sourceRow": 10,
          "no": "5",
          "name": "Exposure Alignment key",
          "recipe": "",
          "params": "Dose\uff1a200 mJ/cm2",
          "machine": "L20",
          "condition": "",
          "note": "NCU Zero Mark",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-1-r11",
          "sourceRow": 11,
          "no": "6",
          "name": "Post-Exposure bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "#62",
          "params": "110\u2103 / 60 sec",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-1-r12",
          "sourceRow": 12,
          "no": "",
          "name": "Development PFI38 (track\u9ede\u9078P-DEV-PFI38-90s)",
          "recipe": "",
          "params": "AD10 - 120 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-1-r13",
          "sourceRow": 13,
          "no": "",
          "name": "Hard bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "",
          "params": "110\u2103 / 60 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-1-r14",
          "sourceRow": 14,
          "no": "7",
          "name": "ADI",
          "recipe": "",
          "params": "",
          "machine": "OM",
          "condition": "",
          "note": "",
          "type": "inspection",
          "enabled": true
        },
        {
          "id": "step-1-r15",
          "sourceRow": 15,
          "no": "8",
          "name": "GaN etch",
          "recipe": "#8",
          "params": "Etch Receipe8 GaN Zero 3min \u00d7 1Loop",
          "machine": "E16",
          "condition": "ER = 160 nm/min",
          "note": "depth > 300 nm",
          "type": "etch",
          "enabled": true
        },
        {
          "id": "step-1-r16",
          "sourceRow": 16,
          "no": "9",
          "name": "Remove PR",
          "recipe": "",
          "params": "ACE (\u9707 10 min)",
          "machine": "\u5316\u5b78\u5be6\u9a57\u5ba4",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-1-r17",
          "sourceRow": 17,
          "no": "10",
          "name": "DI clean",
          "recipe": "",
          "params": "",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-1-r18",
          "sourceRow": 18,
          "no": "12",
          "name": "AEI",
          "recipe": "",
          "params": "",
          "machine": "OM",
          "condition": "",
          "note": "",
          "type": "inspection",
          "enabled": true
        }
      ]
    },
    {
      "id": "step-2",
      "sourceSheet": "PGaN-EVG",
      "sourceRow": 21,
      "title": "Step2. p-GaN Etch (drak)",
      "name": "p-GaN Etch (drak)",
      "tone": "dark",
      "defaultRecipeId": "track-pfi38",
      "steps": [
        {
          "id": "step-2-r23",
          "sourceRow": 23,
          "no": "1",
          "name": "Coating HMDS(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "#31",
          "params": "90\u2103 / 30 sec",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-2-r24",
          "sourceRow": 24,
          "no": "",
          "name": "Coating PFI38 (track\u9ede\u9078P-COT-PFI38)",
          "recipe": "",
          "params": "1400rpm / 40 sec (850 nm)",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-2-r25",
          "sourceRow": 25,
          "no": "",
          "name": "Soft bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "",
          "params": "90\u2103 / 60 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-2-r26",
          "sourceRow": 26,
          "no": "2",
          "name": "Exposure Alignment key",
          "recipe": "",
          "params": "Dose\uff1a200 mJ/cm2",
          "machine": "L20",
          "condition": "",
          "note": "NCU p-GaN",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-2-r27",
          "sourceRow": 27,
          "no": "3",
          "name": "Post-Exposure bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "#62",
          "params": "110\u2103 / 60 sec",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-2-r28",
          "sourceRow": 28,
          "no": "",
          "name": "Development PFI38(track\u9ede\u9078P-DEV-PFI38-90s)",
          "recipe": "",
          "params": "AD10 - 120 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-2-r29",
          "sourceRow": 29,
          "no": "",
          "name": "Hard bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "",
          "params": "110\u2103 / 60 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-2-r30",
          "sourceRow": 30,
          "no": "4",
          "name": "ADI",
          "recipe": "",
          "params": "",
          "machine": "OM",
          "condition": "",
          "note": "",
          "type": "inspection",
          "enabled": true
        },
        {
          "id": "step-2-r31",
          "sourceRow": 31,
          "no": "5",
          "name": "p-GaN etch",
          "recipe": "#6",
          "params": "Etch Receipe6 PGaN\uff08\u4e00\u6b21\u53ea\u80fd\u653e\u4e00\u7247\uff0c\u958bEPD\uff09",
          "machine": "E16",
          "condition": "ER = 5A/sec",
          "note": "EPD\u958b\u9806\u5e8f:\u5de6\u53f3\u4e2d(EPD OE 10%)",
          "type": "etch",
          "enabled": true
        },
        {
          "id": "step-2-r32",
          "sourceRow": 32,
          "no": "6",
          "name": "Remove PR",
          "recipe": "",
          "params": "ACE (\u9707 10 min)",
          "machine": "\u5316\u5b78\u5be6\u9a57\u5ba4",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-2-r33",
          "sourceRow": 33,
          "no": "7",
          "name": "DI clean",
          "recipe": "",
          "params": "",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-2-r34",
          "sourceRow": 34,
          "no": "8",
          "name": "Check etch depth",
          "recipe": "",
          "params": "scan speed\uff1a2um/sec",
          "machine": "E14",
          "condition": "",
          "note": "",
          "type": "etch",
          "enabled": true
        },
        {
          "id": "step-2-r35",
          "sourceRow": 35,
          "no": "9",
          "name": "AEI",
          "recipe": "",
          "params": "",
          "machine": "OM",
          "condition": "",
          "note": "",
          "type": "inspection",
          "enabled": true
        }
      ]
    },
    {
      "id": "step-3",
      "sourceSheet": "PGaN-EVG",
      "sourceRow": 38,
      "title": "Step3. Deep Mesa Etch (clear) \u524d\u5148\u505aP GaN Etch",
      "name": "Deep Mesa Etch (clear) \u524d\u5148\u505aP GaN Etch",
      "tone": "clear",
      "defaultRecipeId": "track-pfi89",
      "steps": [
        {
          "id": "step-3-r40",
          "sourceRow": 40,
          "no": "1",
          "name": "Coating HMDS(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "#94",
          "params": "90\u2103 / 30 sec",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-3-r41",
          "sourceRow": 41,
          "no": "",
          "name": "Coating PFI89 (track\u9ede\u9078P-COT-PFI89)",
          "recipe": "",
          "params": "1450rpm / 40sec (2 um)",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-3-r42",
          "sourceRow": 42,
          "no": "",
          "name": "Soft bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "",
          "params": "90\u2103 / 120sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-3-r43",
          "sourceRow": 43,
          "no": "2",
          "name": "Exposure Alignment key",
          "recipe": "",
          "params": "Dose\uff1a200 mJ/cm2",
          "machine": "L20",
          "condition": "",
          "note": "NCU Deep Mesa",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-3-r44",
          "sourceRow": 44,
          "no": "3",
          "name": "Post-Exposure bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "#86",
          "params": "110\u2103 / 120 sec",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-3-r45",
          "sourceRow": 45,
          "no": "",
          "name": "Development  PFI89 (track\u9ede\u9078P-DEV-PFI89)",
          "recipe": "",
          "params": "AD10 - 75 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-3-r46",
          "sourceRow": 46,
          "no": "",
          "name": "Hard bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "",
          "params": "110\u2103 / 50 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-3-r47",
          "sourceRow": 47,
          "no": "4",
          "name": "ADI",
          "recipe": "",
          "params": "",
          "machine": "OM",
          "condition": "",
          "note": "",
          "type": "inspection",
          "enabled": true
        },
        {
          "id": "step-3-r48",
          "sourceRow": 48,
          "no": "5",
          "name": "GaN etch",
          "recipe": "#8",
          "params": "Etch Receipe8 GaN Zero 4min \u00d7 2Loop \uff08\u5982\u975e\u6a19\u6e96\u7d50\u69cb\u9700\u8003\u616e\u539a\u5ea6\u518d\u5b9a\u6642\u9577\uff09",
          "machine": "E16",
          "condition": "ER = 160 nm/min",
          "note": "depth > 1 um",
          "type": "etch",
          "enabled": true
        },
        {
          "id": "step-3-r49",
          "sourceRow": 49,
          "no": "6",
          "name": "Remove PR",
          "recipe": "",
          "params": "ACE ( \u9707 10 min)",
          "machine": "\u5316\u5b78\u5be6\u9a57\u5ba4",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-3-r50",
          "sourceRow": 50,
          "no": "7",
          "name": "DI clean",
          "recipe": "",
          "params": "",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-3-r51",
          "sourceRow": 51,
          "no": "8",
          "name": "Check etch depth > 1 um",
          "recipe": "",
          "params": "scan speed\uff1a2um/sec",
          "machine": "E14",
          "condition": "",
          "note": "",
          "type": "etch",
          "enabled": true
        },
        {
          "id": "step-3-r52",
          "sourceRow": 52,
          "no": "9",
          "name": "AEI",
          "recipe": "",
          "params": "",
          "machine": "OM",
          "condition": "",
          "note": "",
          "type": "inspection",
          "enabled": true
        }
      ]
    },
    {
      "id": "step-4",
      "sourceSheet": "PGaN-EVG",
      "sourceRow": 55,
      "title": "Step4. Active region implant (dark)",
      "name": "Active region implant (dark)",
      "tone": "dark",
      "defaultRecipeId": "track-pfi89",
      "steps": [
        {
          "id": "step-4-r57",
          "sourceRow": 57,
          "no": "1",
          "name": "Coating HMDS(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "#94",
          "params": "90\u2103 / 30 sec",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-4-r58",
          "sourceRow": 58,
          "no": "",
          "name": "Coating PFI89 (track\u9ede\u9078P-COT-PFI89)",
          "recipe": "",
          "params": "1450rpm / 40sec (2 um)",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-4-r59",
          "sourceRow": 59,
          "no": "",
          "name": "Soft bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "",
          "params": "90\u2103 / 120sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-4-r60",
          "sourceRow": 60,
          "no": "2",
          "name": "Exposure Alignment key",
          "recipe": "",
          "params": "Dose\uff1a200 mJ/cm2",
          "machine": "L20",
          "condition": "",
          "note": "NCU Implant",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-4-r61",
          "sourceRow": 61,
          "no": "3",
          "name": "Post-Exposure bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "#86",
          "params": "110\u2103 / 120 sec",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-4-r62",
          "sourceRow": 62,
          "no": "",
          "name": "DevelopmentPFI89(track\u9ede\u9078\u9ede\u9078P-DEV-PFI89)",
          "recipe": "",
          "params": "AD10 - 75 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-4-r63",
          "sourceRow": 63,
          "no": "",
          "name": "Hard bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "",
          "params": "110\u2103 / 50 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-4-r64",
          "sourceRow": 64,
          "no": "4",
          "name": "ADI",
          "recipe": "",
          "params": "",
          "machine": "OM",
          "condition": "",
          "note": "",
          "type": "inspection",
          "enabled": true
        },
        {
          "id": "step-4-r65",
          "sourceRow": 65,
          "no": "5",
          "name": "Ar+ Implant isolation\uff08\u4e0b\u4ee3\u5de5\uff09",
          "recipe": "",
          "params": "Step1. Energy\uff1a45 keV , Dose\uff1a5E14 cm-2",
          "machine": "S06",
          "condition": "",
          "note": "\u8cbc\u65bc\u4e7e\u6de8 6 \u540b\u8f09\u7247\u4e0a",
          "type": "process",
          "enabled": true
        },
        {
          "id": "step-4-r66",
          "sourceRow": 66,
          "no": "",
          "name": "",
          "recipe": "",
          "params": "Step2. Energy\uff1a10 keV , Dose\uff1a5E14 cm-2",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "process",
          "enabled": true
        },
        {
          "id": "step-4-r67",
          "sourceRow": 67,
          "no": "6",
          "name": "Remove PR",
          "recipe": "",
          "params": "ACE (\u9707 10 min)",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-4-r68",
          "sourceRow": 68,
          "no": "7",
          "name": "DI clean",
          "recipe": "",
          "params": "",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-4-r69",
          "sourceRow": 69,
          "no": "8",
          "name": "O2 Plasma",
          "recipe": "#13",
          "params": "",
          "machine": "E08",
          "condition": "",
          "note": "clean residue PR",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-4-r70",
          "sourceRow": 70,
          "no": "9",
          "name": "AEI",
          "recipe": "",
          "params": "",
          "machine": "OM",
          "condition": "",
          "note": "",
          "type": "inspection",
          "enabled": true
        }
      ]
    },
    {
      "id": "step-5",
      "sourceSheet": "PGaN-EVG",
      "sourceRow": 73,
      "title": "Step5. Ohmic Metal thin-film (Clear)",
      "name": "Ohmic Metal thin-film (Clear)",
      "tone": "clear",
      "defaultRecipeId": "track-lor-pfi38",
      "steps": [
        {
          "id": "step-5-r75",
          "sourceRow": 75,
          "no": "1",
          "name": "Coating LOR-7A (~1 um)\uff08\u624b\u52d5\uff09",
          "recipe": "#67",
          "params": "3500rpm / 30sec",
          "machine": "L25",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-5-r76",
          "sourceRow": 76,
          "no": "",
          "name": "Soft bake\uff08\u624b\u52d5\uff09",
          "recipe": "",
          "params": "180\u2103 / 300sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-5-r77",
          "sourceRow": 77,
          "no": "2",
          "name": "Coating HMDS(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "#31",
          "params": "90\u2103 / 30 sec",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-5-r78",
          "sourceRow": 78,
          "no": "",
          "name": "Coating PFI38 (track\u9ede\u9078P-COT-PFI38)",
          "recipe": "",
          "params": "1400rpm / 30 sec (850 nm)",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-5-r79",
          "sourceRow": 79,
          "no": "",
          "name": "Soft bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "",
          "params": "90\u2103 / 60 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-5-r80",
          "sourceRow": 80,
          "no": "3",
          "name": "Exposure Alignment key",
          "recipe": "",
          "params": "Dose\uff1a210 mJ/cm2\uff08Ohmic Mark\u6709\u4e0a\u4e0b\u5169\u7d44\u5171\u56db\u500b\u5c0d\u7a31\u6a19\u8a18\uff09",
          "machine": "L20",
          "condition": "",
          "note": "NCU Ohmic clear",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-5-r81",
          "sourceRow": 81,
          "no": "4",
          "name": "Post-Exposure bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "#62",
          "params": "110\u2103 / 60 sec",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-5-r82",
          "sourceRow": 82,
          "no": "",
          "name": "Development PFI38(track\u9ede\u9078P-DEV-PFI38-90s)",
          "recipe": "",
          "params": "AD10 - 120 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-5-r83",
          "sourceRow": 83,
          "no": "",
          "name": "Hard bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
          "recipe": "",
          "params": "110\u2103 / 60 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-5-r84",
          "sourceRow": 84,
          "no": "5",
          "name": "ADI",
          "recipe": "",
          "params": "",
          "machine": "OM",
          "condition": "",
          "note": "",
          "type": "inspection",
          "enabled": true
        },
        {
          "id": "step-5-r85",
          "sourceRow": 85,
          "no": "6",
          "name": "Remove residue PR",
          "recipe": "",
          "params": "75\u2103 / 5 min",
          "machine": "UV-Ozone",
          "condition": "",
          "note": "NCU \u5fae\u5149\u96fb",
          "type": "process",
          "enabled": true
        },
        {
          "id": "step-5-r86",
          "sourceRow": 86,
          "no": "7",
          "name": "removal of metallic ion contamination",
          "recipe": "",
          "params": "\u68c0\u67e5\u6e29\u5ea6\u4e3a\u5ba4\u6eab HCl\uff1aDI = 1\uff1a2 with 60 sec  (\u7e3d60\uff0c\u5148DI20\uff0cHCL40\uff09",
          "machine": "C06-02",
          "condition": "",
          "note": "\u6d17\u9178\u6309pump\u5553\u52d5+\u624b\u8f49",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-5-r87",
          "sourceRow": 87,
          "no": "8",
          "name": "DI clean",
          "recipe": "",
          "params": "",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-5-r88",
          "sourceRow": 88,
          "no": "9",
          "name": "Baking remove steam",
          "recipe": "",
          "params": "100\u2103 / 60 sec\uff0c\u70e4\u5f8c\u7acb\u523b\u8cbc\u7247",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "process",
          "enabled": true
        },
        {
          "id": "step-5-r89",
          "sourceRow": 89,
          "no": "10",
          "name": "E-gun metal deposition\uff088\u540b\uff09",
          "recipe": "",
          "params": "Ti / Al / Ni / Au = 250 / 1250 / 450 / 750 A \u6aa2\u67e5\u934d\u73873A/s",
          "machine": "T21",
          "condition": "",
          "note": "5\u9846\u91d1 \u8a18\u5f97\u62cd\u7167",
          "type": "deposit",
          "enabled": true
        },
        {
          "id": "step-5-r90",
          "sourceRow": 90,
          "no": "11",
          "name": "Lift-off",
          "recipe": "",
          "params": "PG 1\u5929",
          "machine": "\u5316\u5b78\u5be6\u9a57\u5ba4",
          "condition": "",
          "note": "",
          "type": "process",
          "enabled": true
        },
        {
          "id": "step-5-r91",
          "sourceRow": 91,
          "no": "12",
          "name": "DI clean",
          "recipe": "",
          "params": "\u82e5Liftoff\u672a\u5b8c\u5168\uff08\u84cb\u84cb\u5b50\u6ce1\u6c34\u4e2d\u52a0\u71b110min\uff09\uff08\u4e0d\u8981\u53bb\u6c34\u70d8\u70e4\uff0c\u4ee5\u9632\u672a\u53bb\u5e72\u51c0\u7684\u5149\u963b\u56fa\u5316\uff09",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-5-r92",
          "sourceRow": 92,
          "no": "13",
          "name": "ADI",
          "recipe": "",
          "params": "\u78ba\u8a8d\u91d1\u5c6cliftoff\u6b63\u5e38\uff0c\u5149\u963b\u53bb\u9664\u5e72\u51c0",
          "machine": "OM",
          "condition": "",
          "note": "",
          "type": "inspection",
          "enabled": true
        },
        {
          "id": "step-5-r93",
          "sourceRow": 93,
          "no": "14",
          "name": "RTA",
          "recipe": "",
          "params": "850\u2103 / 30 sec, N2 20 SLPM",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "process",
          "enabled": true
        },
        {
          "id": "step-5-r94",
          "sourceRow": 94,
          "no": "15",
          "name": "ADI",
          "recipe": "",
          "params": "\u5c0d\u6bd4liftoff\u524d\u5f8c\u91d1\u5c6c",
          "machine": "OM",
          "condition": "",
          "note": "",
          "type": "inspection",
          "enabled": true
        },
        {
          "id": "step-5-r95",
          "sourceRow": 95,
          "no": "16",
          "name": "TLM Measurement",
          "recipe": "",
          "params": "VD = -1 ~ +1 V",
          "machine": "B1505",
          "condition": "",
          "note": "\u5de5\u7814\u9662",
          "type": "inspection",
          "enabled": true
        }
      ]
    },
    {
      "id": "step-insulator",
      "sourceSheet": "PGaN-EVG",
      "sourceRow": 100,
      "title": "Insulator Oxide thin-film",
      "name": "Insulator Oxide thin-film",
      "tone": "clear",
      "defaultRecipeId": "",
      "steps": [
        {
          "id": "step-ins-r1",
          "sourceRow": 100,
          "no": "1",
          "name": "Remove native oxide\uff08MIS\u7d50\u69cb\u9700\u8981\uff09",
          "recipe": "",
          "params": "Step1. Dilute BOE 1\uff1a10 with 30 sec",
          "machine": "\u5316\u5b78\u5be6\u9a57\u5ba4",
          "condition": "",
          "note": "shark",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-ins-r2",
          "sourceRow": 101,
          "no": "",
          "name": "",
          "recipe": "",
          "params": "Step2. HCl\uff1aDI = 1\uff1a2 with 60 sec",
          "machine": "C06-02",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-ins-r3",
          "sourceRow": 102,
          "no": "2",
          "name": "ALD insulator deposition\uff08MIS\u7d50\u69cb\u9700\u8981\uff09",
          "recipe": "",
          "params": "STD Al2O3 / ZrO2 100 A",
          "machine": "RDT007",
          "condition": "",
          "note": "",
          "type": "deposit",
          "enabled": true
        },
        {
          "id": "step-ins-r4",
          "sourceRow": 103,
          "no": "3",
          "name": "Check growth thickness\uff08MIS\u7d50\u69cb\u9700\u8981\uff09",
          "recipe": "",
          "params": "",
          "machine": "M25",
          "condition": "MSE < 10",
          "note": "",
          "type": "deposit",
          "enabled": true
        }
      ]
    },
    {
      "id": "step-6",
      "sourceSheet": "PGaN-EVG",
      "sourceRow": 98,
      "title": "Step6. Gate Metal thin-film (clear)",
      "name": "Gate Metal thin-film (clear)",
      "tone": "clear",
      "defaultRecipeId": "track-lor-pfi38",
      "steps": [
        {
          "id": "step-6-r104",
          "sourceRow": 104,
          "no": "4",
          "name": "Coating LOR-7A (~1 um)\uff08\u624b\u52d5\uff09",
          "recipe": "#67",
          "params": "3500rpm / 30sec",
          "machine": "L25",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-6-r105",
          "sourceRow": 105,
          "no": "",
          "name": "Soft bake",
          "recipe": "",
          "params": "180\u2103 / 5min",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-6-r106",
          "sourceRow": 106,
          "no": "5",
          "name": "Coating HMDS\uff08\u624b\u52d5\uff09",
          "recipe": "#31",
          "params": "90\u2103 / 30 sec",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-6-r107",
          "sourceRow": 107,
          "no": "",
          "name": "Coating PFI38 (850 nm) (track\u9ede\u9078P-COT-PFI38)",
          "recipe": "",
          "params": "1400rpm / 30 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-6-r108",
          "sourceRow": 108,
          "no": "",
          "name": "Soft bake",
          "recipe": "",
          "params": "90\u2103 / 60 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-6-r109",
          "sourceRow": 109,
          "no": "6",
          "name": "Exposure Alignment key",
          "recipe": "",
          "params": "Dose\uff1a180 mJ/cm2 \u52a0\u58d3\u523090",
          "machine": "L20",
          "condition": "",
          "note": "NCU Gate",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-6-r110",
          "sourceRow": 110,
          "no": "7",
          "name": "Post-Exposure bake",
          "recipe": "#90",
          "params": "120\u2103 / 90 sec",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-6-r111",
          "sourceRow": 111,
          "no": "",
          "name": "Development(track\u9ede\u9078P-DEV-PFI38-LOR)",
          "recipe": "",
          "params": "AD10 - 51 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-6-r112",
          "sourceRow": 112,
          "no": "",
          "name": "Hard bake",
          "recipe": "",
          "params": "115\u2103 / 90 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-6-r113",
          "sourceRow": 113,
          "no": "8",
          "name": "ADI",
          "recipe": "",
          "params": "",
          "machine": "OM",
          "condition": "",
          "note": "",
          "type": "inspection",
          "enabled": true
        },
        {
          "id": "step-6-r114",
          "sourceRow": 114,
          "no": "9",
          "name": "Remove residue PR",
          "recipe": "",
          "params": "75\u2103 / 5 min",
          "machine": "UV-Ozone",
          "condition": "",
          "note": "NCU \u5fae\u5149\u96fb",
          "type": "process",
          "enabled": true
        },
        {
          "id": "step-6-r115",
          "sourceRow": 115,
          "no": "10",
          "name": "removal of metallic ion contamination",
          "recipe": "",
          "params": "\u68c0\u67e5\u6e29\u5ea6\u4e3a\u5ba4\u6eab HCl\uff1aDI = 1\uff1a2 with 60 sec (\u7e3d60\uff0c\u5148DI20\uff0cHCL40\uff09",
          "machine": "C06-02",
          "condition": "",
          "note": "\u6d17\u9178\u6309pump\u5553\u52d5+\u624b\u8f49",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-6-r116",
          "sourceRow": 116,
          "no": "11",
          "name": "DI clean",
          "recipe": "",
          "params": "",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-6-r117",
          "sourceRow": 117,
          "no": "13",
          "name": "E-gun metal deposition",
          "recipe": "",
          "params": "Ni / Au = 300 / 1000 A",
          "machine": "T21",
          "condition": "",
          "note": "4\u9846\u91d1 \u8a18\u5f97\u62cd\u7167",
          "type": "deposit",
          "enabled": true
        },
        {
          "id": "step-6-r118",
          "sourceRow": 118,
          "no": "14",
          "name": "Lift-off",
          "recipe": "",
          "params": "PG 1\u5929",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "process",
          "enabled": true
        },
        {
          "id": "step-6-r119",
          "sourceRow": 119,
          "no": "15",
          "name": "DI clean",
          "recipe": "",
          "params": "\u82e5Liftoff\u672a\u5b8c\u5168\uff08\u84cb\u84cb\u5b50\u6ce1\u6c34\u4e2d\u52a0\u71b110min\uff09\uff08\u4e0d\u8981\u53bb\u6c34\u70d8\u70e4\uff0c\u4ee5\u9632\u672a\u53bb\u5e72\u51c0\u7684\u5149\u963b\u56fa\u5316\uff09",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-6-r120",
          "sourceRow": 120,
          "no": "16",
          "name": "ADI",
          "recipe": "",
          "params": "",
          "machine": "OM",
          "condition": "",
          "note": "",
          "type": "inspection",
          "enabled": true
        },
        {
          "id": "step-6-r121",
          "sourceRow": 121,
          "no": "17",
          "name": "Check metal thickness",
          "recipe": "",
          "params": "scan rate\uff1a2um/sec",
          "machine": "E14",
          "condition": "",
          "note": "",
          "type": "deposit",
          "enabled": true
        }
      ]
    },
    {
      "id": "step-7",
      "sourceSheet": "PGaN-EVG",
      "sourceRow": 124,
      "title": "Step7. Passivation Etch (clear)",
      "name": "Passivation Etch (clear)",
      "tone": "clear",
      "defaultRecipeId": "track-lor-pfi38",
      "steps": [
        {
          "id": "step-7-r126",
          "sourceRow": 126,
          "no": "",
          "name": "Remove native oxide",
          "recipe": "",
          "params": "Dilute BOE 1\uff1a10 with 30 sec",
          "machine": "\u5316\u5b78\u5be6\u9a57\u5ba4",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-7-r127",
          "sourceRow": 127,
          "no": "1",
          "name": "Growth Al2O3 / ZrO2",
          "recipe": "",
          "params": "STD Al2O3 / ZrO2 200 A",
          "machine": "RDT007",
          "condition": "",
          "note": "\u53ef\u4f7f\u7528PECVD\u9577SiN 1500A \u4ee3\u66ff",
          "type": "deposit",
          "enabled": true
        },
        {
          "id": "step-7-r128",
          "sourceRow": 128,
          "no": "2",
          "name": "Check growth thickness",
          "recipe": "",
          "params": "",
          "machine": "M25",
          "condition": "MSE < 10",
          "note": "\u4f7f\u7528\u524d\u5148\u7528NH3\u6e05\u8154",
          "type": "deposit",
          "enabled": true
        },
        {
          "id": "step-7-r129",
          "sourceRow": 129,
          "no": "3",
          "name": "Growth SiO2 (150 nm)",
          "recipe": "",
          "params": "STD SiO2 1500 A",
          "machine": "T19",
          "condition": "",
          "note": "\u63a7\u7247\u653e\u5728\u4e0b\u65b9(\u7531\u4e0b\u5f80\u4e0a\u505a)",
          "type": "deposit",
          "enabled": true
        },
        {
          "id": "step-7-r130",
          "sourceRow": 130,
          "no": "4",
          "name": "Check growth thickness",
          "recipe": "",
          "params": "",
          "machine": "M25",
          "condition": "",
          "note": "\u4e3b\u8981\u8f09\u7247\u591a\u653e\u4e00\u7247Si\u91cf\u819c\u539a",
          "type": "deposit",
          "enabled": true
        },
        {
          "id": "step-7-r131",
          "sourceRow": 131,
          "no": "5",
          "name": "Coating HMDS",
          "recipe": "#31",
          "params": "90\u2103 / 30 sec",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-7-r132",
          "sourceRow": 132,
          "no": "",
          "name": "Coating PFI38 (850 nm) (track\u9ede\u9078P-COT-PFI38)",
          "recipe": "",
          "params": "1400rpm / 40 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-7-r133",
          "sourceRow": 133,
          "no": "",
          "name": "Soft bake",
          "recipe": "",
          "params": "90\u2103 / 60 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-7-r134",
          "sourceRow": 134,
          "no": "6",
          "name": "Exposure Alignment key",
          "recipe": "",
          "params": "Dose\uff1a190 or 200mJ/cm2 \u52a0\u58d3",
          "machine": "L20",
          "condition": "",
          "note": "NCU Pass Via",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-7-r135",
          "sourceRow": 135,
          "no": "7",
          "name": "Post-Exposure bake",
          "recipe": "#62",
          "params": "110\u2103 / 60 sec",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-7-r136",
          "sourceRow": 136,
          "no": "",
          "name": "Development(track\u9ede\u9078P-DEV-PFI38-LOR)",
          "recipe": "",
          "params": "AD10 - 120 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-7-r137",
          "sourceRow": 137,
          "no": "",
          "name": "Hard bake",
          "recipe": "",
          "params": "110\u2103 / 60 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-7-r138",
          "sourceRow": 138,
          "no": "8",
          "name": "ADI",
          "recipe": "",
          "params": "",
          "machine": "OM",
          "condition": "",
          "note": "",
          "type": "inspection",
          "enabled": true
        },
        {
          "id": "step-7-r139",
          "sourceRow": 139,
          "no": "9",
          "name": "Etching pretreatment",
          "recipe": "",
          "params": "",
          "machine": "E08",
          "condition": "",
          "note": "chamber clean",
          "type": "etch",
          "enabled": true
        },
        {
          "id": "step-7-r140",
          "sourceRow": 140,
          "no": "10",
          "name": "SiO2 etch",
          "recipe": "",
          "params": "CHF3/Ar = 30 / 40 sccm OE\uff1a50%",
          "machine": "E08",
          "condition": "ER = 55A/sec",
          "note": "",
          "type": "etch",
          "enabled": true
        },
        {
          "id": "step-7-r141",
          "sourceRow": 141,
          "no": "11",
          "name": "AOEI",
          "recipe": "",
          "params": "",
          "machine": "OM",
          "condition": "",
          "note": "check SiO2 etch clean",
          "type": "inspection",
          "enabled": true
        },
        {
          "id": "step-7-r142",
          "sourceRow": 142,
          "no": "12",
          "name": "Etching pretreatment",
          "recipe": "",
          "params": "",
          "machine": "E08",
          "condition": "",
          "note": "chamber clean",
          "type": "etch",
          "enabled": true
        },
        {
          "id": "step-7-r143",
          "sourceRow": 143,
          "no": "13",
          "name": "Al2O3 / ZrO2 etch",
          "recipe": "",
          "params": "BCl3 = 50 sccm OE\uff1a50%",
          "machine": "E08",
          "condition": "ER = 6.5A/sec",
          "note": "",
          "type": "etch",
          "enabled": true
        },
        {
          "id": "step-7-r144",
          "sourceRow": 144,
          "no": "14",
          "name": "AOEI",
          "recipe": "",
          "params": "",
          "machine": "OM",
          "condition": "",
          "note": "check ZrO2 etch clean",
          "type": "inspection",
          "enabled": true
        },
        {
          "id": "step-7-r145",
          "sourceRow": 145,
          "no": "15",
          "name": "Remove PR",
          "recipe": "",
          "params": "ACE 75\u2103 10 min",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-7-r146",
          "sourceRow": 146,
          "no": "16",
          "name": "DI clean",
          "recipe": "",
          "params": "",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-7-r147",
          "sourceRow": 147,
          "no": "17",
          "name": "O2 plasma",
          "recipe": "#13",
          "params": "",
          "machine": "E08",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-7-r148",
          "sourceRow": 148,
          "no": "18",
          "name": "AEI",
          "recipe": "",
          "params": "",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "inspection",
          "enabled": true
        }
      ]
    },
    {
      "id": "step-8",
      "sourceSheet": "PGaN-EVG",
      "sourceRow": 151,
      "title": "Step8. Pad Metal thin-film (dark)",
      "name": "Pad Metal thin-film (dark)",
      "tone": "dark",
      "defaultRecipeId": "track-lor-pfi38",
      "steps": [
        {
          "id": "step-8-r153",
          "sourceRow": 153,
          "no": "4",
          "name": "Coating LOR-7A (~1 um)\uff08\u624b\u52d5\uff09",
          "recipe": "#67",
          "params": "3500rpm / 30sec",
          "machine": "L25",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-8-r154",
          "sourceRow": 154,
          "no": "",
          "name": "Soft bake",
          "recipe": "",
          "params": "180\u2103 / 5min",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-8-r155",
          "sourceRow": 155,
          "no": "5",
          "name": "Coating HMDS\uff08\u624b\u52d5\uff09",
          "recipe": "#31",
          "params": "90\u2103 / 30 sec",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-8-r156",
          "sourceRow": 156,
          "no": "",
          "name": "Coating PFI38 (850 nm) (track\u9ede\u9078P-COT-PFI38)",
          "recipe": "",
          "params": "1400rpm / 30 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-8-r157",
          "sourceRow": 157,
          "no": "",
          "name": "Soft bake",
          "recipe": "",
          "params": "90\u2103 / 60 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-8-r158",
          "sourceRow": 158,
          "no": "6",
          "name": "Exposure Alignment key",
          "recipe": "",
          "params": "Dose\uff1a200 mJ/cm2",
          "machine": "L20",
          "condition": "",
          "note": "NCU Gate",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-8-r159",
          "sourceRow": 159,
          "no": "7",
          "name": "Post-Exposure bake",
          "recipe": "#90",
          "params": "120\u2103 / 90 sec",
          "machine": "L09",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-8-r160",
          "sourceRow": 160,
          "no": "",
          "name": "Development(track\u9ede\u9078P-DEV-PFI38-LOR)",
          "recipe": "",
          "params": "AD10 - 51 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-8-r161",
          "sourceRow": 161,
          "no": "",
          "name": "Hard bake",
          "recipe": "",
          "params": "115\u2103 / 90 sec",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "photo",
          "enabled": true
        },
        {
          "id": "step-8-r162",
          "sourceRow": 162,
          "no": "8",
          "name": "Remove native oxide",
          "recipe": "",
          "params": "\u68c0\u67e5\u6e29\u5ea6\u4e3a30\u2103\u5ba4\u6e29 HCl\uff1aDI = 1\uff1a2 with 60 sec (\u7e3d60\uff0c\u5148DI20\uff0cHCL40\uff09",
          "machine": "C06-02",
          "condition": "",
          "note": "\u6d17\u9178\u6309pump\u5553\u52d5+\u624b\u8f49",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-8-r163",
          "sourceRow": 163,
          "no": "9",
          "name": "DI clean",
          "recipe": "",
          "params": "",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-8-r164",
          "sourceRow": 164,
          "no": "10",
          "name": "E-gun metal deposition",
          "recipe": "",
          "params": "Ti/Al/Ti = 250/3000/250 A",
          "machine": "T21",
          "condition": "",
          "note": "",
          "type": "deposit",
          "enabled": true
        },
        {
          "id": "step-8-r165",
          "sourceRow": 165,
          "no": "11",
          "name": "Lift-off",
          "recipe": "",
          "params": "PG 1\u5929",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "process",
          "enabled": true
        },
        {
          "id": "step-8-r166",
          "sourceRow": 166,
          "no": "12",
          "name": "DI clean",
          "recipe": "",
          "params": "",
          "machine": "",
          "condition": "",
          "note": "",
          "type": "clean",
          "enabled": true
        },
        {
          "id": "step-8-r167",
          "sourceRow": 167,
          "no": "13",
          "name": "ADI",
          "recipe": "",
          "params": "",
          "machine": "OM",
          "condition": "",
          "note": "",
          "type": "inspection",
          "enabled": true
        },
        {
          "id": "step-8-r168",
          "sourceRow": 168,
          "no": "14",
          "name": "Check metal thickness",
          "recipe": "",
          "params": "scan rate\uff1a2um/sec",
          "machine": "E14",
          "condition": "",
          "note": "",
          "type": "deposit",
          "enabled": true
        },
        {
          "id": "step-8-r169",
          "sourceRow": 169,
          "no": "15",
          "name": "Device Measurement",
          "recipe": "",
          "params": "",
          "machine": "B1505",
          "condition": "",
          "note": "\u5de5\u7814\u9662",
          "type": "inspection",
          "enabled": true
        }
      ]
    }
  ],
  "photoRecipes": [
    {
      "id": "track-pfi38",
      "mode": "track",
      "label": "Track \u6b63\u5e38\uff1aP-COT-PFI38 / P-DEV-PFI38-90s",
      "shortLabel": "P-COT-PFI38",
      "pr": "PFI38",
      "note": "\u4f86\u81ea PGaN-EVG Step1/2/7\uff1aPFI38\uff0c\u539a\u5ea6\u7d04 850 nm\u3002",
      "beforeExposure": [
        {
          "name": "Coating HMDS (track \u9ed8\u8a8d)",
          "recipe": "#31",
          "params": "90℃ / 30 sec",
          "machine": "L09",
          "condition": "",
          "note": "track \u4e2d\u4e0d\u7528\u53e6\u5916\u9078"
        },
        {
          "name": "Coating PFI38 (track \u9ede\u9078 P-COT-PFI38)",
          "recipe": "",
          "params": "1400rpm / 40 sec (850 nm)",
          "machine": "L09",
          "condition": "",
          "note": ""
        },
        {
          "name": "Soft bake (track \u9ed8\u8a8d)",
          "recipe": "",
          "params": "90℃ / 60 sec",
          "machine": "L09",
          "condition": "",
          "note": ""
        }
      ],
      "afterExposure": [
        {
          "name": "Post-Exposure bake (track \u9ed8\u8a8d)",
          "recipe": "#62",
          "params": "110℃ / 60 sec",
          "machine": "L09",
          "condition": "",
          "note": ""
        },
        {
          "name": "Development PFI38 (track \u9ede\u9078 P-DEV-PFI38-90s)",
          "recipe": "",
          "params": "AD10 - 120 sec",
          "machine": "L09",
          "condition": "",
          "note": ""
        },
        {
          "name": "Hard bake (track \u9ed8\u8a8d)",
          "recipe": "",
          "params": "110℃ / 60 sec",
          "machine": "L09",
          "condition": "",
          "note": ""
        }
      ]
    },
    {
      "id": "track-pfi89",
      "mode": "track",
      "label": "Track \u6b63\u5e38\uff1aP-COT-PFI89 / P-DEV-PFI89",
      "shortLabel": "P-COT-PFI89",
      "pr": "PFI89",
      "note": "\u4f86\u81ea PGaN-EVG Step3/4\uff1aPFI89\uff0c\u539a\u5ea6\u7d04 2 um\u3002",
      "beforeExposure": [
        {
          "name": "Coating HMDS (track \u9ed8\u8a8d)",
          "recipe": "#94",
          "params": "90℃ / 30 sec",
          "machine": "L09",
          "condition": "",
          "note": ""
        },
        {
          "name": "Coating PFI89 (track \u9ede\u9078 P-COT-PFI89)",
          "recipe": "",
          "params": "1450rpm / 40 sec (2 um)",
          "machine": "L09",
          "condition": "",
          "note": ""
        },
        {
          "name": "Soft bake (track \u9ed8\u8a8d)",
          "recipe": "",
          "params": "90℃ / 120 sec",
          "machine": "L09",
          "condition": "",
          "note": ""
        }
      ],
      "afterExposure": [
        {
          "name": "Post-Exposure bake (track \u9ed8\u8a8d)",
          "recipe": "#86",
          "params": "110℃ / 120 sec",
          "machine": "L09",
          "condition": "",
          "note": ""
        },
        {
          "name": "Development PFI89 (track \u9ede\u9078 P-DEV-PFI89)",
          "recipe": "",
          "params": "AD10 - 75 sec",
          "machine": "L09",
          "condition": "",
          "note": ""
        },
        {
          "name": "Hard bake (track \u9ed8\u8a8d)",
          "recipe": "",
          "params": "110℃ / 50 sec",
          "machine": "L09",
          "condition": "",
          "note": ""
        }
      ]
    },
    {
      "id": "track-lor-pfi38",
      "mode": "track",
      "label": "Track \u6b63\u5e38\uff1aLOR-7A + P-COT-PFI38 / P-DEV-PFI38-LOR",
      "shortLabel": "LOR + P-COT-PFI38",
      "pr": "LOR7A + PFI38",
      "note": "\u4f86\u81ea PGaN-EVG Step6/8 \u8207 Manual Develop Recipe\uff1a\u9069\u5408 bilayer/lift-off\u3002",
      "beforeExposure": [
        {
          "name": "Coating LOR-7A (~1 um) (\u624b\u52d5)",
          "recipe": "#67",
          "params": "3500rpm / 30 sec",
          "machine": "L25",
          "condition": "",
          "note": "LOR \u4ecd\u6309\u624b\u52d5 spin coater"
        },
        {
          "name": "Soft bake LOR-7A (\u624b\u52d5)",
          "recipe": "",
          "params": "180℃ / 300 sec",
          "machine": "Hot plate",
          "condition": "",
          "note": ""
        },
        {
          "name": "Coating HMDS",
          "recipe": "#31",
          "params": "90℃ / 30 sec",
          "machine": "L09",
          "condition": "",
          "note": ""
        },
        {
          "name": "Coating PFI38 (track \u9ede\u9078 P-COT-PFI38)",
          "recipe": "",
          "params": "1400rpm / 30 sec (850 nm)",
          "machine": "L09",
          "condition": "",
          "note": ""
        },
        {
          "name": "Soft bake PFI38",
          "recipe": "",
          "params": "90℃ / 60 sec",
          "machine": "L09",
          "condition": "",
          "note": ""
        }
      ],
      "afterExposure": [
        {
          "name": "Post-Exposure bake",
          "recipe": "#90",
          "params": "120℃ / 90 sec",
          "machine": "L09",
          "condition": "",
          "note": ""
        },
        {
          "name": "Development LOR+PFI38 (track \u9ede\u9078 P-DEV-PFI38-LOR)",
          "recipe": "",
          "params": "AD10 - 51 sec",
          "machine": "L09",
          "condition": "",
          "note": "Manual Develop Recipe: 50s"
        },
        {
          "name": "Hard bake",
          "recipe": "",
          "params": "115℃ / 90 sec",
          "machine": "L09",
          "condition": "",
          "note": ""
        }
      ]
    },
    {
      "id": "manual-pfi38",
      "mode": "manual",
      "label": "\u8a2d\u5099\u7570\u5e38/\u624b\u52d5\uff1aPFI38",
      "shortLabel": "\u624b\u52d5 PFI38",
      "pr": "PFI38",
      "note": "Manual Coting Receipe + Manual Develop Recipe \u7684 PI38/PFI38 \u884c\u3002",
      "beforeExposure": [
        {
          "name": "Manual coating PFI38",
          "recipe": "#67",
          "params": "1400 rpm / 300 sec main spin",
          "machine": "L25 spin coater",
          "condition": "",
          "note": "Manual Coting Receipe: PFI38"
        },
        {
          "name": "Soft bake PFI38",
          "recipe": "",
          "params": "90℃ / 60 sec",
          "machine": "Hot plate",
          "condition": "",
          "note": ""
        }
      ],
      "afterExposure": [
        {
          "name": "Post-Exposure bake PFI38",
          "recipe": "",
          "params": "110℃ / 60 sec",
          "machine": "Hot plate",
          "condition": "",
          "note": ""
        },
        {
          "name": "Manual development PFI38",
          "recipe": "",
          "params": "20 sec",
          "machine": "Manual develop",
          "condition": "",
          "note": "Manual Develop Recipe row PI38"
        },
        {
          "name": "Hard bake PFI38",
          "recipe": "",
          "params": "110℃ / 60 sec",
          "machine": "Hot plate",
          "condition": "",
          "note": ""
        }
      ]
    },
    {
      "id": "manual-pfi89",
      "mode": "manual",
      "label": "\u8a2d\u5099\u7570\u5e38/\u624b\u52d5\uff1aPFI89 / P015",
      "shortLabel": "\u624b\u52d5 PFI89",
      "pr": "PFI89",
      "note": "\u8868\u683c Manual Develop Recipe \u672a\u76f4\u63a5\u5217 PFI89\uff0c\u5148\u6309 P015=PFI89 \u8655\u7406\uff0c\u9700\u4f60\u78ba\u8a8d\u540d\u7a31\u3002",
      "beforeExposure": [
        {
          "name": "Manual coating PFI89",
          "recipe": "#67",
          "params": "1500 rpm / 300 sec main spin",
          "machine": "L25 spin coater",
          "condition": "",
          "note": "Manual Coting Receipe: PFI89"
        },
        {
          "name": "Soft bake PFI89",
          "recipe": "",
          "params": "90℃ / 120 sec",
          "machine": "Hot plate",
          "condition": "",
          "note": ""
        }
      ],
      "afterExposure": [
        {
          "name": "Post-Exposure bake PFI89/P015",
          "recipe": "",
          "params": "120℃ / 90 sec",
          "machine": "Hot plate",
          "condition": "",
          "note": "Manual Develop Recipe row P015"
        },
        {
          "name": "Manual development PFI89/P015",
          "recipe": "",
          "params": "75 sec",
          "machine": "Manual develop",
          "condition": "",
          "note": ""
        }
      ]
    },
    {
      "id": "manual-lor-pfi38",
      "mode": "manual",
      "label": "\u8a2d\u5099\u7570\u5e38/\u624b\u52d5\uff1aLOR-7A + PFI38",
      "shortLabel": "\u624b\u52d5 LOR+PFI38",
      "pr": "LOR7A + PFI38",
      "note": "Manual Coting Receipe + Manual Develop Recipe \u7684 LOR7A&PI38 \u884c\u3002",
      "beforeExposure": [
        {
          "name": "Manual coating LOR-7A",
          "recipe": "#67",
          "params": "3500 rpm / 300 sec main spin",
          "machine": "L25 spin coater",
          "condition": "",
          "note": ""
        },
        {
          "name": "Soft bake LOR-7A",
          "recipe": "",
          "params": "180℃ / 300 sec",
          "machine": "Hot plate",
          "condition": "",
          "note": ""
        },
        {
          "name": "Manual coating PFI38",
          "recipe": "#67",
          "params": "1400 rpm / 300 sec main spin",
          "machine": "L25 spin coater",
          "condition": "",
          "note": ""
        },
        {
          "name": "Soft bake PFI38",
          "recipe": "",
          "params": "90℃ / 60 sec",
          "machine": "Hot plate",
          "condition": "",
          "note": ""
        }
      ],
      "afterExposure": [
        {
          "name": "Post-Exposure bake LOR+PFI38",
          "recipe": "",
          "params": "120℃ / 90 sec",
          "machine": "Hot plate",
          "condition": "",
          "note": ""
        },
        {
          "name": "Manual development LOR+PFI38",
          "recipe": "",
          "params": "50 sec",
          "machine": "Manual develop",
          "condition": "",
          "note": ""
        },
        {
          "name": "Hard bake LOR+PFI38",
          "recipe": "",
          "params": "115℃ / 90 sec",
          "machine": "Hot plate",
          "condition": "",
          "note": ""
        }
      ]
    }
  ],
  "cleanRecipes": [
    {
      "id": "ace-remove-pr",
      "name": "化學實驗室（ACE）Remove PR",
      "machine": "\u5316\u5b78\u5be6\u9a57\u5ba4",
      "chemicals": "ACE",
      "ratio": "",
      "mix": "",
      "temperature": "\u5ba4\u6eab",
      "time": "10 min",
      "usage": "Remove PR",
      "step": {
        "name": "Remove PR",
        "recipe": "",
        "params": "ACE10min",
        "machine": "\u5316\u5b78\u5be6\u9a57\u5ba4",
        "condition": "",
        "note": "Clean Receipe"
      }
    },
    {
      "id": "ace-ipa-wafer-clean",
      "name": "化學實驗室（ACE+IPA）wafer clean",
      "machine": "\u5316\u5b78\u5be6\u9a57\u5ba4",
      "chemicals": "ACE / DIwater / IPA",
      "ratio": "",
      "mix": "",
      "temperature": "\u5ba4\u6eab",
      "time": "ACE 5 min + IPA 5 min",
      "usage": "Wafer clean",
      "step": {
        "name": "Wafer clean",
        "recipe": "",
        "params": "ACE(\u97075min) \u2014>DIwater->IPA(\u97075min)->DIwater",
        "machine": "\u5316\u5b78\u5be6\u9a57\u5ba4",
        "condition": "",
        "note": "Clean Receipe"
      }
    },
    {
      "id": "sc-1",
      "name": "SC-1",
      "machine": "C06-01",
      "chemicals": "NH4OH : H2O2 : H2O",
      "ratio": "0.25 : 1 : 5",
      "mix": "\uff08\u8a2d\u7e3d\u723280%\uff093.2%:12.8%:64%",
      "temperature": "75",
      "time": "600",
      "usage": "\u53bb\u9664\u5fae\u7c92/\u6709\u6a5f\u6c59\u67d3\u7269",
      "step": {
        "name": "SC-1 clean",
        "recipe": "",
        "params": "NH4OH : H2O2 : H2O; 0.25 : 1 : 5; \uff08\u8a2d\u7e3d\u723280%\uff093.2%:12.8%:64%; 75℃; 600",
        "machine": "C06-01",
        "condition": "\u53bb\u9664\u5fae\u7c92/\u6709\u6a5f\u6c59\u67d3\u7269",
        "note": "Clean Receipe"
      }
    },
    {
      "id": "sc-2",
      "name": "SC-2",
      "machine": "C06-02",
      "chemicals": "HCl : H2O2 : H2O",
      "ratio": "1 : 1 : 6",
      "mix": "\uff08\u8a2d\u7e3d\u723280%\uff0910% : 10% : 60%",
      "temperature": "75",
      "time": "600",
      "usage": "\u53bb\u9664\u91d1\u5c6c\u6c59\u67d3\u7269",
      "step": {
        "name": "SC-2 clean",
        "recipe": "",
        "params": "HCl : H2O2 : H2O; 1 : 1 : 6; \uff08\u8a2d\u7e3d\u723280%\uff0910% : 10% : 60%; 75℃; 600",
        "machine": "C06-02",
        "condition": "\u53bb\u9664\u91d1\u5c6c\u6c59\u67d3\u7269",
        "note": "Clean Receipe"
      }
    },
    {
      "id": "boe",
      "name": "SC-3 (pure BOE)",
      "machine": "C06-03",
      "chemicals": "HF : NH4F",
      "ratio": "1 : 7",
      "mix": "\uff08\u8a2d\u7e3d\u723280%\uff0910% : 70%",
      "temperature": "\u5ba4\u6eab",
      "time": "\u4f9dOxide\u539a\u5ea6(100nm/1min)",
      "usage": "\u53bb\u9664native Oxide",
      "step": {
        "name": "SC-3 (pure BOE) clean",
        "recipe": "",
        "params": "HF : NH4F; 1 : 7; \uff08\u8a2d\u7e3d\u723280%\uff0910% : 70%; \u5ba4\u6eab; \u4f9dOxide\u539a\u5ea6(100nm/1min)",
        "machine": "C06-03",
        "condition": "\u53bb\u9664native Oxide",
        "note": "Clean Receipe"
      }
    },
    {
      "id": "boe-dilute",
      "name": "化學實驗室 (Dilute BOE 1:10)",
      "machine": "\u5316\u5b78\u5be6\u9a57\u5ba4",
      "chemicals": "BOE : H2O",
      "ratio": "1 : 10",
      "mix": "\uff08\u5316\u5b78\u5be6\u9a57\u5ba4\u5df2\u914d\u597d\uff09",
      "temperature": "\u5ba4\u6eab",
      "time": "\u6d78\u6ce230 sec",
      "usage": "\u53bb\u9664native Oxide / \u53bb\u9664\u6e96\u4f4d\u6c27\u5316\u5c42",
      "step": {
        "name": "化學實驗室 (Dilute BOE) clean",
        "recipe": "",
        "params": "Dilute BOE 1:10; \u5ba4\u6eab; \u6d78\u6ce230 sec",
        "machine": "\u5316\u5b78\u5be6\u9a57\u5ba4",
        "condition": "\u53bb\u9664native Oxide / \u53bb\u9664\u6e96\u4f4d\u6c27\u5316\u5c42",
        "note": "\u5316\u5b78\u5be6\u9a57\u5ba4\u5df2\u914d\u597d\u53ef\u76f4\u63a5\u53d6\u7528, \u7528Teflon\u88dd\uff08\u6d78\u6ce230 sec\uff09"
      }
    },
    {
      "id": "spm",
      "name": "SPM(\u6709\u91d1\u5c6c\u4e0d\u53ef\u7528)",
      "machine": "",
      "chemicals": "H2SO4 : H2O2",
      "ratio": "4 : 1",
      "mix": "\uff08\u8a2d\u7e3d\u723280%\uff0964% : 16%",
      "temperature": "125",
      "time": "600",
      "usage": "\u53bb\u9664\u6709\u6a5f\u6c59\u67d3\u7269",
      "step": {
        "name": "SPM(\u6709\u91d1\u5c6c\u4e0d\u53ef\u7528) clean",
        "recipe": "",
        "params": "H2SO4 : H2O2; 4 : 1; \uff08\u8a2d\u7e3d\u723280%\uff0964% : 16%; 125℃; 600",
        "machine": "",
        "condition": "\u53bb\u9664\u6709\u6a5f\u6c59\u67d3\u7269",
        "note": "Clean Receipe"
      }
    },
    {
      "id": "clean-7",
      "name": "\u53bb\u91d1\u5c6c",
      "machine": "",
      "chemicals": "H2SO4 : H2O2",
      "ratio": "3 : 1",
      "mix": "\uff08\u8a2d\u7e3d\u723280%\uff0960% : 20%",
      "temperature": "120",
      "time": "120",
      "usage": "\u53bbCo\u3001Al\u3001Ni\u3001Ti/Al",
      "step": {
        "name": "\u53bb\u91d1\u5c6c clean",
        "recipe": "",
        "params": "H2SO4 : H2O2; 3 : 1; \uff08\u8a2d\u7e3d\u723280%\uff0960% : 20%; 120℃; 120",
        "machine": "",
        "condition": "\u53bbCo\u3001Al\u3001Ni\u3001Ti/Al",
        "note": "Clean Receipe"
      }
    },
    {
      "id": "clean-8",
      "name": "\u53bb\u5149\u963b",
      "machine": "",
      "chemicals": "H2SO4 : H2O2",
      "ratio": "1 : 0",
      "mix": "",
      "temperature": "120",
      "time": "600",
      "usage": "\u5347\u6eab\u81f3120\u00b0C, \u88dcH2O2 8s",
      "step": {
        "name": "\u53bb\u5149\u963b clean",
        "recipe": "",
        "params": "H2SO4 : H2O2; 1 : 0; 120℃; 600",
        "machine": "",
        "condition": "\u5347\u6eab\u81f3120\u00b0C, \u88dcH2O2 8s",
        "note": "Clean Receipe"
      }
    },
    {
      "id": "sinx",
      "name": "SiNx",
      "machine": "",
      "chemicals": "H3PO4",
      "ratio": "",
      "mix": "",
      "temperature": "150",
      "time": "",
      "usage": "\u53bbSiNx",
      "step": {
        "name": "SiNx clean",
        "recipe": "",
        "params": "H3PO4; 150℃",
        "machine": "",
        "condition": "\u53bbSiNx",
        "note": "Clean Receipe"
      }
    }
  ],
  "rework": [
    {
      "title": "\u5149\u963b\u4e3aPFI38\uff0cPFI89\uff08\u65e0\u91d1\u5c5e\u65e0\u6c27\u5316\u5c42\uff09",
      "steps": [
        "1\u6ce1ACE-10min",
        "2\u9707\u8361",
        "3 O2 Plasma",
        "4 \u6ce1BOE\u53bb\u6c27\u5316\u7269"
      ]
    },
    {
      "title": "\u5149\u963b\u4e3aPFI38\uff0cPFI89\uff08\u6709\u91d1\u5c5e\u6709\u6c27\u5316\u5c42\uff09",
      "steps": [
        "1\u6ce1ACE\u52a0\u70ed75\u2103-5min",
        "2 O2 Plasma"
      ]
    },
    {
      "title": "\u5149\u963b\u542bLOR\uff08\u65e0\u91d1\u5c5e\u65e0\u6c27\u5316\u5c42\uff09",
      "steps": [
        "\u6ce1PG\uff0c\u76d6\u9521\u7b94\u7eb8\u52a0\u70ed75\u2103-10min",
        "2\u9707\u8361",
        "3 O2 Plasma",
        "4 \u6ce1BOE\u53bb\u6c27\u5316\u7269"
      ]
    }
  ],
  "conflicts": [
    "Step5 Ohmic \u4f7f\u7528 LOR-7A + PFI38\uff0c\u4f46\u986f\u5f71/\u786c\u70e4\u5beb\u6210 P-DEV-PFI38-90s\u3001110\u2103/60 sec\uff1bManual Develop Recipe \u7684 LOR7A&PI38 \u662f 50s\u3001115\u2103/90 sec\u3002\u7db2\u9801\u6703\u4fdd\u7559\u539f\u8868\u884c\uff0c\u4e5f\u5141\u8a31\u5957\u7528 LOR+PFI38 \u6a19\u6e96\u7d44\u5408\u3002",
    "Manual Develop Recipe \u4e2d\u6c92\u6709\u76f4\u63a5\u5beb PFI89\uff0c\u800c\u662f P015\uff1b\u7db2\u9801\u66ab\u628a P015 \u4f5c\u70ba\u624b\u52d5 PFI89/P015 \u9078\u9805\uff0c\u540d\u7a31\u5efa\u8b70\u78ba\u8a8d\u3002"
  ],
  "referenceSheets": [
    {
      "id": "pgan-evg",
      "name": "PGaN-EVG",
      "minRow": 2,
      "minCol": 2,
      "rows": [
        {
          "rowNumber": 2,
          "cells": [
            "Step1. Alignment Key Etch (clear)",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 3,
          "cells": [
            "",
            "\u6b65\u9a5f",
            "Recipe",
            "\u53c3\u6578",
            "\u6a5f\u53f0",
            "\u689d\u4ef6",
            "\u8aaa\u660e"
          ]
        },
        {
          "rowNumber": 4,
          "cells": [
            "1",
            "Prepare 2.5cm * 2.5cm Sample",
            "",
            "Laser cutting",
            "",
            "",
            "track\u78ba\u8a8d\u662f\u5426\u53ef\u653e\u5165\u8f09\u5177\u4e0d\u6703\u6389\u51fa\u4f86"
          ]
        },
        {
          "rowNumber": 5,
          "cells": [
            "2",
            "Wafer clean",
            "",
            "ACE(\u97075min) \u2014>DIwater->IPA(\u97075min)->DIwater",
            "\u5316\u5b78\u5be6\u9a57\u5ba4",
            "",
            ""
          ]
        },
        {
          "rowNumber": 6,
          "cells": [
            "3",
            "Remove native oxide",
            "",
            "pure BOE clean (2min)",
            "C06-03",
            "",
            ""
          ]
        },
        {
          "rowNumber": 7,
          "cells": [
            "4",
            "Coating HMDS(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "#31",
            "90\u2103 / 30 sec",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 8,
          "cells": [
            "",
            "Coating PFI38 (track\u9ede\u9078P-COT-PFI38)",
            "",
            "1400rpm / 40 sec (850 nm)",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 9,
          "cells": [
            "",
            "Soft bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "",
            "90\u2103 / 60 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 10,
          "cells": [
            "5",
            "Exposure Alignment key",
            "",
            "Dose\uff1a200 mJ/cm2",
            "L20",
            "",
            "NCU Zero Mark"
          ]
        },
        {
          "rowNumber": 11,
          "cells": [
            "6",
            "Post-Exposure bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "#62",
            "110\u2103 / 60 sec",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 12,
          "cells": [
            "",
            "Development PFI38 (track\u9ede\u9078P-DEV-PFI38-90s)",
            "",
            "AD10 - 120 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 13,
          "cells": [
            "",
            "Hard bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "",
            "110\u2103 / 60 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 14,
          "cells": [
            "7",
            "ADI",
            "",
            "",
            "OM",
            "",
            ""
          ]
        },
        {
          "rowNumber": 15,
          "cells": [
            "8",
            "GaN etch",
            "#8",
            "Etch Receipe8 GaN Zero 3min \u00d7 1Loop",
            "E16",
            "ER = 160 nm/min",
            "depth > 300 nm"
          ]
        },
        {
          "rowNumber": 16,
          "cells": [
            "9",
            "Remove PR",
            "",
            "ACE (\u9707 10 min)",
            "\u5316\u5b78\u5be6\u9a57\u5ba4",
            "",
            ""
          ]
        },
        {
          "rowNumber": 17,
          "cells": [
            "10",
            "DI clean",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 18,
          "cells": [
            "12",
            "AEI",
            "",
            "",
            "OM",
            "",
            ""
          ]
        },
        {
          "rowNumber": 21,
          "cells": [
            "Step2. p-GaN Etch (drak)",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 22,
          "cells": [
            "",
            "\u6b65\u9a5f",
            "Recipe",
            "\u53c3\u6578",
            "\u6a5f\u53f0",
            "\u689d\u4ef6",
            "\u8aaa\u660e"
          ]
        },
        {
          "rowNumber": 23,
          "cells": [
            "1",
            "Coating HMDS(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "#31",
            "90\u2103 / 30 sec",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 24,
          "cells": [
            "",
            "Coating PFI38 (track\u9ede\u9078P-COT-PFI38)",
            "",
            "1400rpm / 40 sec (850 nm)",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 25,
          "cells": [
            "",
            "Soft bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "",
            "90\u2103 / 60 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 26,
          "cells": [
            "2",
            "Exposure Alignment key",
            "",
            "Dose\uff1a200 mJ/cm2",
            "L20",
            "",
            "NCU p-GaN"
          ]
        },
        {
          "rowNumber": 27,
          "cells": [
            "3",
            "Post-Exposure bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "#62",
            "110\u2103 / 60 sec",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 28,
          "cells": [
            "",
            "Development PFI38(track\u9ede\u9078P-DEV-PFI38-90s)",
            "",
            "AD10 - 120 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 29,
          "cells": [
            "",
            "Hard bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "",
            "110\u2103 / 60 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 30,
          "cells": [
            "4",
            "ADI",
            "",
            "",
            "OM",
            "",
            ""
          ]
        },
        {
          "rowNumber": 31,
          "cells": [
            "5",
            "p-GaN etch",
            "#6",
            "Etch Receipe6 PGaN\uff08\u4e00\u6b21\u53ea\u80fd\u653e\u4e00\u7247\uff0c\u958bEPD\uff09",
            "E16",
            "ER = 5A/sec",
            "EPD\u958b\u9806\u5e8f:\u5de6\u53f3\u4e2d(EPD OE 10%)"
          ]
        },
        {
          "rowNumber": 32,
          "cells": [
            "6",
            "Remove PR",
            "",
            "ACE (\u9707 10 min)",
            "\u5316\u5b78\u5be6\u9a57\u5ba4",
            "",
            ""
          ]
        },
        {
          "rowNumber": 33,
          "cells": [
            "7",
            "DI clean",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 34,
          "cells": [
            "8",
            "Check etch depth",
            "",
            "scan speed\uff1a2um/sec",
            "E14",
            "",
            ""
          ]
        },
        {
          "rowNumber": 35,
          "cells": [
            "9",
            "AEI",
            "",
            "",
            "OM",
            "",
            ""
          ]
        },
        {
          "rowNumber": 38,
          "cells": [
            "Step3. Deep Mesa Etch (clear) \u524d\u5148\u505aP GaN Etch",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 39,
          "cells": [
            "",
            "\u6b65\u9a5f",
            "Recipe",
            "\u53c3\u6578",
            "\u6a5f\u53f0",
            "\u689d\u4ef6",
            "\u8aaa\u660e"
          ]
        },
        {
          "rowNumber": 40,
          "cells": [
            "1",
            "Coating HMDS(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "#94",
            "90\u2103 / 30 sec",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 41,
          "cells": [
            "",
            "Coating PFI89 (track\u9ede\u9078P-COT-PFI89)",
            "",
            "1450rpm / 40sec (2 um)",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 42,
          "cells": [
            "",
            "Soft bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "",
            "90\u2103 / 120sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 43,
          "cells": [
            "2",
            "Exposure Alignment key",
            "",
            "Dose\uff1a200 mJ/cm2",
            "L20",
            "",
            "NCU Deep Mesa"
          ]
        },
        {
          "rowNumber": 44,
          "cells": [
            "3",
            "Post-Exposure bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "#86",
            "110\u2103 / 120 sec",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 45,
          "cells": [
            "",
            "Development  PFI89 (track\u9ede\u9078P-DEV-PFI89)",
            "",
            "AD10 - 75 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 46,
          "cells": [
            "",
            "Hard bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "",
            "110\u2103 / 50 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 47,
          "cells": [
            "4",
            "ADI",
            "",
            "",
            "OM",
            "",
            ""
          ]
        },
        {
          "rowNumber": 48,
          "cells": [
            "5",
            "GaN etch",
            "#8",
            "Etch Receipe8 GaN Zero 4min \u00d7 2Loop \uff08\u5982\u975e\u6a19\u6e96\u7d50\u69cb\u9700\u8003\u616e\u539a\u5ea6\u518d\u5b9a\u6642\u9577\uff09",
            "E16",
            "ER = 160 nm/min",
            "depth > 1 um"
          ]
        },
        {
          "rowNumber": 49,
          "cells": [
            "6",
            "Remove PR",
            "",
            "ACE ( \u9707 10 min)",
            "\u5316\u5b78\u5be6\u9a57\u5ba4",
            "",
            ""
          ]
        },
        {
          "rowNumber": 50,
          "cells": [
            "7",
            "DI clean",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 51,
          "cells": [
            "8",
            "Check etch depth > 1 um",
            "",
            "scan speed\uff1a2um/sec",
            "E14",
            "",
            ""
          ]
        },
        {
          "rowNumber": 52,
          "cells": [
            "9",
            "AEI",
            "",
            "",
            "OM",
            "",
            ""
          ]
        },
        {
          "rowNumber": 55,
          "cells": [
            "Step4. Implant (dark)",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 56,
          "cells": [
            "",
            "\u6b65\u9a5f",
            "Recipe",
            "\u53c3\u6578",
            "\u6a5f\u53f0",
            "\u689d\u4ef6",
            "\u8aaa\u660e"
          ]
        },
        {
          "rowNumber": 57,
          "cells": [
            "1",
            "Coating HMDS(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "#94",
            "90\u2103 / 30 sec",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 58,
          "cells": [
            "",
            "Coating PFI89 (track\u9ede\u9078P-COT-PFI89)",
            "",
            "1450rpm / 40sec (2 um)",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 59,
          "cells": [
            "",
            "Soft bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "",
            "90\u2103 / 120sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 60,
          "cells": [
            "2",
            "Exposure Alignment key",
            "",
            "Dose\uff1a200 mJ/cm2",
            "L20",
            "",
            "NCU Implant"
          ]
        },
        {
          "rowNumber": 61,
          "cells": [
            "3",
            "Post-Exposure bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "#86",
            "110\u2103 / 120 sec",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 62,
          "cells": [
            "",
            "DevelopmentPFI89(track\u9ede\u9078\u9ede\u9078P-DEV-PFI89)",
            "",
            "AD10 - 75 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 63,
          "cells": [
            "",
            "Hard bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "",
            "110\u2103 / 50 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 64,
          "cells": [
            "4",
            "ADI",
            "",
            "",
            "OM",
            "",
            ""
          ]
        },
        {
          "rowNumber": 65,
          "cells": [
            "5",
            "Ar+ Implant isolation\uff08\u4e0b\u4ee3\u5de5\uff09",
            "",
            "Step1. Energy\uff1a45 keV , Dose\uff1a5E14 cm-2",
            "S06",
            "",
            "\u8cbc\u65bc\u4e7e\u6de8 6 \u540b\u8f09\u7247\u4e0a"
          ]
        },
        {
          "rowNumber": 66,
          "cells": [
            "",
            "",
            "",
            "Step2. Energy\uff1a10 keV , Dose\uff1a5E14 cm-2",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 67,
          "cells": [
            "6",
            "Remove PR",
            "",
            "ACE (\u9707 10 min)",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 68,
          "cells": [
            "7",
            "DI clean",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 69,
          "cells": [
            "8",
            "O2 Plasma",
            "#601",
            "",
            "E08",
            "",
            "clean residue PR"
          ]
        },
        {
          "rowNumber": 70,
          "cells": [
            "9",
            "AEI",
            "",
            "",
            "OM",
            "",
            ""
          ]
        },
        {
          "rowNumber": 73,
          "cells": [
            "Step5. Ohmic (Clear)",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 74,
          "cells": [
            "",
            "\u6b65\u9a5f",
            "Recipe",
            "\u53c3\u6578",
            "\u6a5f\u53f0",
            "\u689d\u4ef6",
            "\u8aaa\u660e"
          ]
        },
        {
          "rowNumber": 75,
          "cells": [
            "1",
            "Coating LOR-7A (~1 um)\uff08\u624b\u52d5\uff09",
            "#67",
            "3500rpm / 30sec",
            "L25",
            "",
            ""
          ]
        },
        {
          "rowNumber": 76,
          "cells": [
            "",
            "Soft bake\uff08\u624b\u52d5\uff09",
            "",
            "180\u2103 / 300sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 77,
          "cells": [
            "2",
            "Coating HMDS(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "#31",
            "90\u2103 / 30 sec",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 78,
          "cells": [
            "",
            "Coating PFI38 (track\u9ede\u9078P-COT-PFI38)",
            "",
            "1400rpm / 30 sec (850 nm)",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 79,
          "cells": [
            "",
            "Soft bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "",
            "90\u2103 / 60 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 80,
          "cells": [
            "3",
            "Exposure Alignment key",
            "",
            "Dose\uff1a210 mJ/cm2\uff08Ohmic Mark\u6709\u4e0a\u4e0b\u5169\u7d44\u5171\u56db\u500b\u5c0d\u7a31\u6a19\u8a18\uff09",
            "L20",
            "",
            "NCU Ohmic clear"
          ]
        },
        {
          "rowNumber": 81,
          "cells": [
            "4",
            "Post-Exposure bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "#62",
            "110\u2103 / 60 sec",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 82,
          "cells": [
            "",
            "Development PFI38(track\u9ede\u9078P-DEV-PFI38-90s)",
            "",
            "AD10 - 120 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 83,
          "cells": [
            "",
            "Hard bake(track\u4e2d\u4e0d\u7528\u53e6\u5916\u9078\uff0c\u9ed8\u8a8d\u4f7f\u7528\uff09",
            "",
            "110\u2103 / 60 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 84,
          "cells": [
            "5",
            "ADI",
            "",
            "",
            "OM",
            "",
            ""
          ]
        },
        {
          "rowNumber": 85,
          "cells": [
            "6",
            "Remove residue PR",
            "",
            "75\u2103 / 5 min",
            "UV-Ozone",
            "",
            "NCU \u5fae\u5149\u96fb"
          ]
        },
        {
          "rowNumber": 86,
          "cells": [
            "7",
            "removal of metallic ion contamination",
            "",
            "\u68c0\u67e5\u6e29\u5ea6\u4e3a\u5ba4\u6eab HCl\uff1aDI = 1\uff1a2 with 60 sec  (\u7e3d60\uff0c\u5148DI20\uff0cHCL40\uff09",
            "C06-02",
            "",
            "\u6d17\u9178\u6309pump\u5553\u52d5+\u624b\u8f49"
          ]
        },
        {
          "rowNumber": 87,
          "cells": [
            "8",
            "DI clean",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 88,
          "cells": [
            "9",
            "Baking remove steam",
            "",
            "100\u2103 / 60 sec\uff0c\u70e4\u5f8c\u7acb\u523b\u8cbc\u7247",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 89,
          "cells": [
            "10",
            "E-gun metal deposition\uff088\u540b\uff09",
            "",
            "Ti / Al / Ni / Au = 250 / 1250 / 450 / 750 A \u6aa2\u67e5\u934d\u73873A/s",
            "T21",
            "",
            "5\u9846\u91d1 \u8a18\u5f97\u62cd\u7167"
          ]
        },
        {
          "rowNumber": 90,
          "cells": [
            "11",
            "Lift-off",
            "",
            "PG 1\u5929",
            "\u5316\u5b78\u5be6\u9a57\u5ba4",
            "",
            ""
          ]
        },
        {
          "rowNumber": 91,
          "cells": [
            "12",
            "DI clean",
            "",
            "\u82e5Liftoff\u672a\u5b8c\u5168\uff08\u84cb\u84cb\u5b50\u6ce1\u6c34\u4e2d\u52a0\u71b110min\uff09\uff08\u4e0d\u8981\u53bb\u6c34\u70d8\u70e4\uff0c\u4ee5\u9632\u672a\u53bb\u5e72\u51c0\u7684\u5149\u963b\u56fa\u5316\uff09",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 92,
          "cells": [
            "13",
            "ADI",
            "",
            "\u78ba\u8a8d\u91d1\u5c6cliftoff\u6b63\u5e38\uff0c\u5149\u963b\u53bb\u9664\u5e72\u51c0",
            "OM",
            "",
            ""
          ]
        },
        {
          "rowNumber": 93,
          "cells": [
            "14",
            "RTA",
            "",
            "850\u2103 / 30 sec, N2 20 SLPM",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 94,
          "cells": [
            "15",
            "ADI",
            "",
            "\u5c0d\u6bd4liftoff\u524d\u5f8c\u91d1\u5c6c",
            "OM",
            "",
            ""
          ]
        },
        {
          "rowNumber": 95,
          "cells": [
            "16",
            "TLM Measurement",
            "",
            "VD = -1 ~ +1 V",
            "B1505",
            "",
            "\u5de5\u7814\u9662"
          ]
        },
        {
          "rowNumber": 98,
          "cells": [
            "Step6. Gate (clear)",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 99,
          "cells": [
            "",
            "\u6b65\u9a5f",
            "Recipe",
            "\u53c3\u6578",
            "\u6a5f\u53f0",
            "\u689d\u4ef6",
            "\u8aaa\u660e"
          ]
        },
        {
          "rowNumber": 100,
          "cells": [
            "1",
            "Remove native oxide\uff08MIS\u7d50\u69cb\u9700\u8981\uff09",
            "",
            "Step1. Dilute BOE 1\uff1a10 with 30 sec",
            "\u5316\u5b78\u5be6\u9a57\u5ba4",
            "",
            "shark"
          ]
        },
        {
          "rowNumber": 101,
          "cells": [
            "",
            "",
            "",
            "Step2. HCl\uff1aDI = 1\uff1a2 with 60 sec",
            "C06-02",
            "",
            ""
          ]
        },
        {
          "rowNumber": 102,
          "cells": [
            "2",
            "ALD insulator deposition\uff08MIS\u7d50\u69cb\u9700\u8981\uff09",
            "",
            "STD Al2O3 / ZrO2 100 A",
            "RDT007",
            "",
            ""
          ]
        },
        {
          "rowNumber": 103,
          "cells": [
            "3",
            "Check growth thickness\uff08MIS\u7d50\u69cb\u9700\u8981\uff09",
            "",
            "",
            "M25",
            "MSE < 10",
            ""
          ]
        },
        {
          "rowNumber": 104,
          "cells": [
            "4",
            "Coating LOR-7A (~1 um)\uff08\u624b\u52d5\uff09",
            "#67",
            "3500rpm / 30sec",
            "L25",
            "",
            ""
          ]
        },
        {
          "rowNumber": 105,
          "cells": [
            "",
            "Soft bake",
            "",
            "180\u2103 / 5min",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 106,
          "cells": [
            "5",
            "Coating HMDS\uff08\u624b\u52d5\uff09",
            "#31",
            "90\u2103 / 30 sec",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 107,
          "cells": [
            "",
            "Coating PFI38 (850 nm) (track\u9ede\u9078P-COT-PFI38)",
            "",
            "1400rpm / 30 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 108,
          "cells": [
            "",
            "Soft bake",
            "",
            "90\u2103 / 60 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 109,
          "cells": [
            "6",
            "Exposure Alignment key",
            "",
            "Dose\uff1a180 mJ/cm2 \u52a0\u58d3\u523090",
            "L20",
            "",
            "NCU Gate"
          ]
        },
        {
          "rowNumber": 110,
          "cells": [
            "7",
            "Post-Exposure bake",
            "#90",
            "120\u2103 / 90 sec",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 111,
          "cells": [
            "",
            "Development(track\u9ede\u9078P-DEV-PFI38-LOR)",
            "",
            "AD10 - 51 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 112,
          "cells": [
            "",
            "Hard bake",
            "",
            "115\u2103 / 90 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 113,
          "cells": [
            "8",
            "ADI",
            "",
            "",
            "OM",
            "",
            ""
          ]
        },
        {
          "rowNumber": 114,
          "cells": [
            "9",
            "Remove residue PR",
            "",
            "75\u2103 / 5 min",
            "UV-Ozone",
            "",
            "NCU \u5fae\u5149\u96fb"
          ]
        },
        {
          "rowNumber": 115,
          "cells": [
            "10",
            "removal of metallic ion contamination",
            "",
            "\u68c0\u67e5\u6e29\u5ea6\u4e3a\u5ba4\u6eab HCl\uff1aDI = 1\uff1a2 with 60 sec (\u7e3d60\uff0c\u5148DI20\uff0cHCL40\uff09",
            "C06-02",
            "",
            "\u6d17\u9178\u6309pump\u5553\u52d5+\u624b\u8f49"
          ]
        },
        {
          "rowNumber": 116,
          "cells": [
            "11",
            "DI clean",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 117,
          "cells": [
            "13",
            "E-gun metal deposition",
            "",
            "Ni / Au = 300 / 1000 A",
            "T21",
            "",
            "4\u9846\u91d1 \u8a18\u5f97\u62cd\u7167"
          ]
        },
        {
          "rowNumber": 118,
          "cells": [
            "14",
            "Lift-off",
            "",
            "PG 1\u5929",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 119,
          "cells": [
            "15",
            "DI clean",
            "",
            "\u82e5Liftoff\u672a\u5b8c\u5168\uff08\u84cb\u84cb\u5b50\u6ce1\u6c34\u4e2d\u52a0\u71b110min\uff09\uff08\u4e0d\u8981\u53bb\u6c34\u70d8\u70e4\uff0c\u4ee5\u9632\u672a\u53bb\u5e72\u51c0\u7684\u5149\u963b\u56fa\u5316\uff09",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 120,
          "cells": [
            "16",
            "ADI",
            "",
            "",
            "OM",
            "",
            ""
          ]
        },
        {
          "rowNumber": 121,
          "cells": [
            "17",
            "Check metal thickness",
            "",
            "scan rate\uff1a2um/sec",
            "E14",
            "",
            ""
          ]
        },
        {
          "rowNumber": 124,
          "cells": [
            "Step7. Passivation Via (clear)",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 125,
          "cells": [
            "",
            "\u6b65\u9a5f",
            "Recipe",
            "\u53c3\u6578",
            "\u6a5f\u53f0",
            "\u689d\u4ef6",
            "\u8aaa\u660e"
          ]
        },
        {
          "rowNumber": 126,
          "cells": [
            "",
            "Remove native oxide",
            "",
            "Dilute BOE 1\uff1a10 with 30 sec",
            "\u5316\u5b78\u5be6\u9a57\u5ba4",
            "",
            ""
          ]
        },
        {
          "rowNumber": 127,
          "cells": [
            "1",
            "Growth Al2O3 / ZrO2",
            "",
            "STD Al2O3 / ZrO2 200 A",
            "RDT007",
            "",
            "\u53ef\u4f7f\u7528PECVD\u9577SiN 1500A \u4ee3\u66ff"
          ]
        },
        {
          "rowNumber": 128,
          "cells": [
            "2",
            "Check growth thickness",
            "",
            "",
            "M25",
            "MSE < 10",
            "\u4f7f\u7528\u524d\u5148\u7528NH3\u6e05\u8154"
          ]
        },
        {
          "rowNumber": 129,
          "cells": [
            "3",
            "Growth SiO2 (150 nm)",
            "",
            "STD SiO2 1500 A",
            "T19",
            "",
            "\u63a7\u7247\u653e\u5728\u4e0b\u65b9(\u7531\u4e0b\u5f80\u4e0a\u505a)"
          ]
        },
        {
          "rowNumber": 130,
          "cells": [
            "4",
            "Check growth thickness",
            "",
            "",
            "M25",
            "",
            "\u4e3b\u8981\u8f09\u7247\u591a\u653e\u4e00\u7247Si\u91cf\u819c\u539a"
          ]
        },
        {
          "rowNumber": 131,
          "cells": [
            "5",
            "Coating HMDS",
            "#31",
            "90\u2103 / 30 sec",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 132,
          "cells": [
            "",
            "Coating PFI38 (850 nm) (track\u9ede\u9078P-COT-PFI38)",
            "",
            "1400rpm / 40 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 133,
          "cells": [
            "",
            "Soft bake",
            "",
            "90\u2103 / 60 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 134,
          "cells": [
            "6",
            "Exposure Alignment key",
            "",
            "Dose\uff1a190 or 200mJ/cm2 \u52a0\u58d3",
            "L20",
            "",
            "NCU Pass Via"
          ]
        },
        {
          "rowNumber": 135,
          "cells": [
            "7",
            "Post-Exposure bake",
            "#62",
            "110\u2103 / 60 sec",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 136,
          "cells": [
            "",
            "Development(track\u9ede\u9078P-DEV-PFI38-LOR)",
            "",
            "AD10 - 120 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 137,
          "cells": [
            "",
            "Hard bake",
            "",
            "110\u2103 / 60 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 138,
          "cells": [
            "8",
            "ADI",
            "",
            "",
            "OM",
            "",
            ""
          ]
        },
        {
          "rowNumber": 139,
          "cells": [
            "9",
            "Etching pretreatment",
            "#206",
            "",
            "E08",
            "",
            "chamber clean"
          ]
        },
        {
          "rowNumber": 140,
          "cells": [
            "10",
            "SiO2 etch",
            "#0711",
            "CHF3/Ar = 30 / 40 sccm OE\uff1a50%",
            "E08",
            "ER = 55A/sec",
            ""
          ]
        },
        {
          "rowNumber": 141,
          "cells": [
            "11",
            "AOEI",
            "",
            "",
            "OM",
            "",
            "check SiO2 etch clean"
          ]
        },
        {
          "rowNumber": 142,
          "cells": [
            "12",
            "Etching pretreatment",
            "#206",
            "",
            "E08",
            "",
            "chamber clean"
          ]
        },
        {
          "rowNumber": 143,
          "cells": [
            "13",
            "Al2O3 / ZrO2 etch",
            "#6688",
            "BCl3 = 50 sccm OE\uff1a50%",
            "E08",
            "ER = 6.5A/sec",
            ""
          ]
        },
        {
          "rowNumber": 144,
          "cells": [
            "14",
            "AOEI",
            "",
            "",
            "OM",
            "",
            "check ZrO2 etch clean"
          ]
        },
        {
          "rowNumber": 145,
          "cells": [
            "15",
            "Remove PR",
            "",
            "ACE 75\u2103 10 min",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 146,
          "cells": [
            "16",
            "DI clean",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 147,
          "cells": [
            "17",
            "Remove PR",
            "#601",
            "O2 plasma",
            "E08",
            "",
            ""
          ]
        },
        {
          "rowNumber": 148,
          "cells": [
            "18",
            "AEI",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 151,
          "cells": [
            "Step8. Pad (dark)",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 152,
          "cells": [
            "",
            "\u6b65\u9a5f",
            "Recipe",
            "\u53c3\u6578",
            "\u6a5f\u53f0",
            "\u689d\u4ef6",
            "\u8aaa\u660e"
          ]
        },
        {
          "rowNumber": 153,
          "cells": [
            "4",
            "Coating LOR-7A (~1 um)\uff08\u624b\u52d5\uff09",
            "#67",
            "3500rpm / 30sec",
            "L25",
            "",
            ""
          ]
        },
        {
          "rowNumber": 154,
          "cells": [
            "",
            "Soft bake",
            "",
            "180\u2103 / 5min",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 155,
          "cells": [
            "5",
            "Coating HMDS\uff08\u624b\u52d5\uff09",
            "#31",
            "90\u2103 / 30 sec",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 156,
          "cells": [
            "",
            "Coating PFI38 (850 nm) (track\u9ede\u9078P-COT-PFI38)",
            "",
            "1400rpm / 30 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 157,
          "cells": [
            "",
            "Soft bake",
            "",
            "90\u2103 / 60 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 158,
          "cells": [
            "6",
            "Exposure Alignment key",
            "",
            "Dose\uff1a200 mJ/cm2",
            "L20",
            "",
            "NCU Gate"
          ]
        },
        {
          "rowNumber": 159,
          "cells": [
            "7",
            "Post-Exposure bake",
            "#90",
            "120\u2103 / 90 sec",
            "L09",
            "",
            ""
          ]
        },
        {
          "rowNumber": 160,
          "cells": [
            "",
            "Development(track\u9ede\u9078P-DEV-PFI38-LOR)",
            "",
            "AD10 - 51 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 161,
          "cells": [
            "",
            "Hard bake",
            "",
            "115\u2103 / 90 sec",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 162,
          "cells": [
            "8",
            "Remove native oxide",
            "",
            "\u68c0\u67e5\u6e29\u5ea6\u4e3a30\u2103\u5ba4\u6e29 HCl\uff1aDI = 1\uff1a2 with 60 sec (\u7e3d60\uff0c\u5148DI20\uff0cHCL40\uff09",
            "C06-02",
            "",
            "\u6d17\u9178\u6309pump\u5553\u52d5+\u624b\u8f49"
          ]
        },
        {
          "rowNumber": 163,
          "cells": [
            "9",
            "DI clean",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 164,
          "cells": [
            "10",
            "E-gun metal deposition",
            "",
            "Ti/Al/Ti = 250/3000/250 A",
            "T21",
            "",
            ""
          ]
        },
        {
          "rowNumber": 165,
          "cells": [
            "11",
            "Lift-off",
            "",
            "PG 1\u5929",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 166,
          "cells": [
            "12",
            "DI clean",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 167,
          "cells": [
            "13",
            "ADI",
            "",
            "",
            "OM",
            "",
            ""
          ]
        },
        {
          "rowNumber": 168,
          "cells": [
            "14",
            "Check metal thickness",
            "",
            "scan rate\uff1a2um/sec",
            "E14",
            "",
            ""
          ]
        },
        {
          "rowNumber": 169,
          "cells": [
            "15",
            "Device Measurement",
            "",
            "",
            "B1505",
            "",
            "\u5de5\u7814\u9662"
          ]
        }
      ]
    },
    {
      "id": "e17-etch-metal-receipe",
      "name": "E17-Etch Metal Receipe",
      "minRow": 2,
      "minCol": 2,
      "rows": [
        {
          "rowNumber": 2,
          "cells": [
            "#14",
            "SiO2 / SiN / TiN",
            "",
            "",
            "",
            "",
            "#15",
            "High-K",
            "",
            ""
          ]
        },
        {
          "rowNumber": 3,
          "cells": [
            "",
            "step 1",
            "step 2",
            "step 3",
            "",
            "",
            "",
            "step 1",
            "step 2",
            "step 3"
          ]
        },
        {
          "rowNumber": 4,
          "cells": [
            "Cl2",
            "0",
            "0",
            "0",
            "",
            "",
            "Cl2",
            "0",
            "0",
            "0"
          ]
        },
        {
          "rowNumber": 5,
          "cells": [
            "BCl3",
            "0",
            "0",
            "0",
            "",
            "",
            "BCl3",
            "50",
            "50",
            "50"
          ]
        },
        {
          "rowNumber": 6,
          "cells": [
            "SiCl4",
            "0",
            "0",
            "0",
            "",
            "",
            "SiCl4",
            "0",
            "0",
            "0"
          ]
        },
        {
          "rowNumber": 7,
          "cells": [
            "CHF3",
            "50",
            "50",
            "50",
            "",
            "",
            "CHF3",
            "0",
            "0",
            "0"
          ]
        },
        {
          "rowNumber": 8,
          "cells": [
            "CF4",
            "0",
            "0",
            "0",
            "",
            "",
            "CF4",
            "0",
            "0",
            "0"
          ]
        },
        {
          "rowNumber": 9,
          "cells": [
            "O2",
            "0",
            "0",
            "0",
            "",
            "",
            "O2",
            "0",
            "0",
            "0"
          ]
        },
        {
          "rowNumber": 10,
          "cells": [
            "Ar",
            "30",
            "30",
            "30",
            "",
            "",
            "Ar",
            "0",
            "0",
            "0"
          ]
        },
        {
          "rowNumber": 12,
          "cells": [
            "APC",
            "2",
            "0.5",
            "0.5",
            "",
            "",
            "APC",
            "2",
            "0.5",
            "0.5"
          ]
        },
        {
          "rowNumber": 14,
          "cells": [
            "ICP",
            "600",
            "600",
            "600",
            "",
            "",
            "ICP",
            "300",
            "300",
            "300"
          ]
        },
        {
          "rowNumber": 15,
          "cells": [
            "BIAS",
            "0",
            "0",
            "160",
            "",
            "",
            "BIAS",
            "0",
            "0",
            "100"
          ]
        },
        {
          "rowNumber": 17,
          "cells": [
            "Time",
            "5s",
            "10s",
            "28/30.8/5 A/s",
            "",
            "",
            "Time",
            "5s",
            "10s",
            "10 A/s"
          ]
        },
        {
          "rowNumber": 21,
          "cells": [
            "#14",
            "TiN / NiO /TeO",
            "",
            "",
            "",
            "",
            "#14",
            "GaN",
            "",
            ""
          ]
        },
        {
          "rowNumber": 22,
          "cells": [
            "",
            "step 1",
            "step 2",
            "step 3",
            "",
            "",
            "",
            "step 1",
            "step 2",
            "step 3"
          ]
        },
        {
          "rowNumber": 23,
          "cells": [
            "Cl2",
            "50",
            "50",
            "50",
            "",
            "",
            "Cl2",
            "20",
            "20",
            "20"
          ]
        },
        {
          "rowNumber": 24,
          "cells": [
            "BCl3",
            "30",
            "30",
            "30",
            "",
            "",
            "BCl3",
            "5",
            "5",
            "5"
          ]
        },
        {
          "rowNumber": 25,
          "cells": [
            "SiCl4",
            "0",
            "0",
            "0",
            "",
            "",
            "SiCl4",
            "0",
            "0",
            "0"
          ]
        },
        {
          "rowNumber": 26,
          "cells": [
            "CHF3",
            "0",
            "0",
            "0",
            "",
            "",
            "CHF3",
            "0",
            "0",
            "0"
          ]
        },
        {
          "rowNumber": 27,
          "cells": [
            "CF4",
            "0",
            "0",
            "0",
            "",
            "",
            "CF4",
            "0",
            "0",
            "0"
          ]
        },
        {
          "rowNumber": 28,
          "cells": [
            "O2",
            "0",
            "0",
            "0",
            "",
            "",
            "O2",
            "0",
            "0",
            "0"
          ]
        },
        {
          "rowNumber": 29,
          "cells": [
            "Ar",
            "0",
            "0",
            "0",
            "",
            "",
            "Ar",
            "0",
            "0",
            "0"
          ]
        },
        {
          "rowNumber": 31,
          "cells": [
            "APC",
            "2",
            "0.5",
            "0.5",
            "",
            "",
            "APC",
            "2",
            "0.5",
            "0.5"
          ]
        },
        {
          "rowNumber": 33,
          "cells": [
            "ICP",
            "400",
            "400",
            "400",
            "",
            "",
            "ICP",
            "80",
            "80",
            "80"
          ]
        },
        {
          "rowNumber": 34,
          "cells": [
            "BIAS",
            "0",
            "0",
            "100",
            "",
            "",
            "BIAS",
            "0",
            "0",
            "100"
          ]
        },
        {
          "rowNumber": 36,
          "cells": [
            "Time",
            "5s",
            "10s",
            "40 / 2 / A/s",
            "",
            "",
            "Time",
            "5s",
            "10s",
            "135 nm/min"
          ]
        }
      ]
    },
    {
      "id": "e16-etch-receipe",
      "name": "E16-Etch Receipe",
      "minRow": 2,
      "minCol": 2,
      "rows": [
        {
          "rowNumber": 2,
          "cells": [
            "#2",
            "AlGaN",
            "",
            "",
            "",
            "#6",
            "p-GaN\u4e00\u6b21\u53ea\u80fd\u653e\u4e00\u7247                   (\u5148\u9009\u4e0a\u9762\u4e24\u4e2a\u5b50\u8fdb\u7a0b\u770bEPD\uff0c\u518d\u9009\u4e0b\u9762\u4e09\u4e2a\u5b57\u8fdb\u7a0b\uff09",
            "",
            "",
            "",
            "#8",
            "GaN Zero",
            "",
            "",
            "",
            "",
            "",
            "#10",
            "Cl Clean",
            "",
            ""
          ]
        },
        {
          "rowNumber": 3,
          "cells": [
            "",
            "step 1",
            "step 2",
            "step 3",
            "",
            "",
            "step 1",
            "step 2",
            "step 3",
            "",
            "",
            "step 1",
            "step 2",
            "step 3",
            "",
            "",
            "",
            "",
            "step 1",
            "step 2",
            "step 3"
          ]
        },
        {
          "rowNumber": 4,
          "cells": [
            "Cl2",
            "20",
            "20",
            "20",
            "",
            "Cl2",
            "10",
            "10",
            "10",
            "",
            "Cl2",
            "20",
            "20",
            "20",
            "",
            "",
            "",
            "Cl2",
            "30",
            "30",
            "30"
          ]
        },
        {
          "rowNumber": 5,
          "cells": [
            "SiCl4",
            "0",
            "0",
            "0",
            "",
            "SiCl4",
            "0",
            "0",
            "0",
            "",
            "SiCl4",
            "0",
            "0",
            "0",
            "",
            "",
            "",
            "SiCl4",
            "0",
            "0",
            "0"
          ]
        },
        {
          "rowNumber": 6,
          "cells": [
            "BCl3",
            "20",
            "20",
            "20",
            "",
            "BCl3",
            "15",
            "15",
            "15",
            "",
            "BCl3",
            "5",
            "5",
            "5",
            "",
            "",
            "",
            "BCl3",
            "0",
            "0",
            "0"
          ]
        },
        {
          "rowNumber": 7,
          "cells": [
            "Ar",
            "0",
            "0",
            "0",
            "",
            "Ar",
            "0",
            "0",
            "0",
            "",
            "Ar",
            "0",
            "0",
            "0",
            "",
            "",
            "",
            "Ar",
            "100",
            "100",
            "100"
          ]
        },
        {
          "rowNumber": 8,
          "cells": [
            "SF6",
            "0",
            "0",
            "0",
            "",
            "SF6",
            "10",
            "10",
            "10",
            "",
            "SF6",
            "0",
            "0",
            "0",
            "",
            "",
            "",
            "SF6",
            "0",
            "0",
            "0"
          ]
        },
        {
          "rowNumber": 9,
          "cells": [
            "O2",
            "0",
            "0",
            "0",
            "",
            "O2",
            "0",
            "0",
            "0",
            "",
            "O2",
            "0",
            "0",
            "0",
            "",
            "",
            "",
            "O2",
            "0",
            "0",
            "0"
          ]
        },
        {
          "rowNumber": 11,
          "cells": [
            "APC",
            "5",
            "2",
            "0.6",
            "",
            "APC",
            "1",
            "5",
            "5",
            "",
            "APC",
            "5",
            "1.5",
            "1.5",
            "",
            "",
            "",
            "APC",
            "5",
            "5",
            "1"
          ]
        },
        {
          "rowNumber": 13,
          "cells": [
            "BIAS",
            "0",
            "0",
            "5",
            "",
            "BIAS",
            "0",
            "0",
            "30",
            "",
            "BIAS",
            "0",
            "0",
            "100",
            "",
            "",
            "",
            "BIAS",
            "0",
            "50",
            "50"
          ]
        },
        {
          "rowNumber": 14,
          "cells": [
            "ICP",
            "0",
            "150",
            "150",
            "",
            "ICP",
            "0",
            "150",
            "200",
            "",
            "ICP",
            "0",
            "80",
            "80",
            "P-GaN Evg",
            "",
            "",
            "ICP",
            "450",
            "450",
            "450"
          ]
        },
        {
          "rowNumber": 15,
          "cells": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "STEP1",
            "STEP2",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 16,
          "cells": [
            "Time",
            "30s",
            "20s",
            "0.027 nm/s",
            "",
            "Time",
            "30s",
            "20s",
            "0.75 nm/s",
            "",
            "Time",
            "30s",
            "20s",
            "150 nm/min",
            "3min",
            "4min",
            "",
            "Time",
            "5s",
            "5m",
            "5m"
          ]
        },
        {
          "rowNumber": 17,
          "cells": [
            "Temp",
            "60 \u2103",
            "",
            "",
            "",
            "Temp",
            "60 \u2103",
            "",
            "by EPD",
            "",
            "Temp",
            "20 \u2103",
            "",
            "\u6ce8\u610f Loop",
            "1Loop",
            "2Loop",
            "",
            "Temp",
            "60 \u2103",
            "",
            ""
          ]
        },
        {
          "rowNumber": 18,
          "cells": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u6d82\u77fd\u6cb9\uff08\u70b9\u4e00\u6ef4\u5373\u53ef\uff09",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 21,
          "cells": [
            "#15",
            "AlGaN Fast",
            "",
            "",
            "",
            "#17",
            "GaN Chyi for Mesa",
            "",
            "",
            "",
            "#19",
            "Ebeam 0",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 22,
          "cells": [
            "",
            "step 1",
            "step 2",
            "step 3",
            "",
            "",
            "step 1",
            "step 2",
            "step 3",
            "",
            "",
            "step 1",
            "step 2",
            "step 3",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 23,
          "cells": [
            "Cl2",
            "20",
            "20",
            "20",
            "",
            "Cl2",
            "20",
            "20",
            "20",
            "",
            "Cl2",
            "20",
            "20",
            "20",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 24,
          "cells": [
            "SiCl4",
            "0",
            "0",
            "0",
            "",
            "SiCl4",
            "0",
            "0",
            "0",
            "",
            "SiCl4",
            "0",
            "0",
            "0",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 25,
          "cells": [
            "BCl3",
            "20",
            "20",
            "20",
            "",
            "BCl3",
            "5",
            "5",
            "5",
            "",
            "BCl3",
            "5",
            "5",
            "5",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 26,
          "cells": [
            "Ar",
            "0",
            "0",
            "0",
            "",
            "Ar",
            "0",
            "0",
            "0",
            "",
            "Ar",
            "0",
            "0",
            "0",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 27,
          "cells": [
            "SF6",
            "0",
            "0",
            "0",
            "",
            "SF6",
            "0",
            "0",
            "0",
            "",
            "SF6",
            "0",
            "0",
            "0",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 28,
          "cells": [
            "O2",
            "0",
            "0",
            "0",
            "",
            "O2",
            "0",
            "0",
            "0",
            "",
            "O2",
            "0",
            "0",
            "0",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 30,
          "cells": [
            "APC",
            "5",
            "2",
            "0.6",
            "",
            "APC",
            "5",
            "1.5",
            "1.5",
            "",
            "APC",
            "5",
            "1.5",
            "1.5",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 32,
          "cells": [
            "BIAS",
            "0",
            "0",
            "30",
            "",
            "BIAS",
            "0",
            "0",
            "25",
            "",
            "BIAS",
            "0",
            "0",
            "100",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 33,
          "cells": [
            "ICP",
            "0",
            "150",
            "150",
            "",
            "ICP",
            "0",
            "75",
            "75",
            "",
            "ICP",
            "0",
            "80",
            "80",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 35,
          "cells": [
            "Time",
            "30s",
            "20s",
            "0.27 nm/s",
            "",
            "Time",
            "30s",
            "20s",
            "0.45 nm/s",
            "",
            "Time",
            "30s",
            "20s",
            "150 nm/min",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 36,
          "cells": [
            "Temp",
            "60 \u2103",
            "",
            "",
            "",
            "Temp",
            "60 \u2103",
            "",
            "",
            "",
            "Temp",
            "60 \u2103",
            "",
            "Loop 4",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        }
      ]
    },
    {
      "id": "clean-receipe",
      "name": "Clean Receipe",
      "minRow": 2,
      "minCol": 1,
      "rows": [
        {
          "rowNumber": 2,
          "cells": [
            "#Wet bench",
            "\u6a5f\u53f0",
            "\u5316\u5b78\u54c1",
            "\u6a5f\u53f0\u9ed8\u8a8d\u6bd4\u4f8b",
            "\u6eff\u69fd100%(\u5be6\u969b\u752880%)                            \u5148\u6c34->\u9178/\u78b1->\u96d9\u6c27\u6c34",
            "\u6eab\u5ea6 (\u2070C)",
            "\u6642\u9593 (s)",
            "\u7528\u9014"
          ]
        },
        {
          "rowNumber": 3,
          "cells": [
            "SC-1",
            "C06-01",
            "NH4OH : H2O2 : H2O",
            "0.25 : 1 : 5",
            "\uff08\u8a2d\u7e3d\u723280%\uff093.2%:12.8%:64%",
            "75",
            "600",
            "\u53bb\u9664\u5fae\u7c92/\u6709\u6a5f\u6c59\u67d3\u7269"
          ]
        },
        {
          "rowNumber": 4,
          "cells": [
            "SC-2",
            "C06-02",
            "HCl : H2O2 : H2O",
            "1 : 1 : 6",
            "\uff08\u8a2d\u7e3d\u723280%\uff0910% : 10% : 60%",
            "75",
            "600",
            "\u53bb\u9664\u91d1\u5c6c\u6c59\u67d3\u7269"
          ]
        },
        {
          "rowNumber": 5,
          "cells": [
            "BOE",
            "C06-03",
            "HF : NH4F",
            "1 : 7",
            "\uff08\u8a2d\u7e3d\u723280%\uff0910% : 70%",
            "\u5ba4\u6eab",
            "\u4f9dOxide\u539a\u5ea6(100nm/1min)",
            "\u53bb\u9664native Oxide"
          ]
        },
        {
          "rowNumber": 6,
          "cells": [
            "SPM(\u6709\u91d1\u5c6c\u4e0d\u53ef\u7528)",
            "",
            "H2SO4 : H2O2",
            "4 : 1",
            "\uff08\u8a2d\u7e3d\u723280%\uff0964% : 16%",
            "125",
            "600",
            "\u53bb\u9664\u6709\u6a5f\u6c59\u67d3\u7269"
          ]
        },
        {
          "rowNumber": 7,
          "cells": [
            "\u53bb\u91d1\u5c6c",
            "",
            "H2SO4 : H2O2",
            "3 : 1",
            "\uff08\u8a2d\u7e3d\u723280%\uff0960% : 20%",
            "120",
            "120",
            "\u53bbCo\u3001Al\u3001Ni\u3001Ti/Al"
          ]
        },
        {
          "rowNumber": 8,
          "cells": [
            "\u53bb\u5149\u963b",
            "",
            "H2SO4 : H2O2",
            "1 : 0",
            "",
            "120",
            "600",
            "\u5347\u6eab\u81f3120\u00b0C, \u88dcH2O2 8s"
          ]
        },
        {
          "rowNumber": 9,
          "cells": [
            "SiNx",
            "",
            "H3PO4",
            "",
            "",
            "150",
            "",
            "\u53bbSiNx"
          ]
        },
        {
          "rowNumber": 12,
          "cells": [
            "TSRI",
            "\u6fc3\u5ea6",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 13,
          "cells": [
            "H2SO4",
            "0.96",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 14,
          "cells": [
            "H2O2",
            "0.31",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 15,
          "cells": [
            "H3PO4",
            "0.86",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 16,
          "cells": [
            "HF",
            "0.49",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 17,
          "cells": [
            "NH4F",
            "0.4",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        }
      ]
    },
    {
      "id": "manual-coting-receipe",
      "name": "Manual Coting Receipe",
      "minRow": 2,
      "minCol": 1,
      "rows": [
        {
          "rowNumber": 2,
          "cells": [
            "#PR",
            "Coating",
            "",
            ""
          ]
        },
        {
          "rowNumber": 3,
          "cells": [
            "",
            "spin coater\uff08ms\uff09",
            "sorft bake",
            "thickness (um)"
          ]
        },
        {
          "rowNumber": 4,
          "cells": [
            "PFI38",
            "1400",
            "90\u00b0C/60s",
            "0.85"
          ]
        },
        {
          "rowNumber": 5,
          "cells": [
            "PFI89",
            "1500",
            "90\u00b0C/120s",
            "2"
          ]
        },
        {
          "rowNumber": 6,
          "cells": [
            "LOR7A",
            "3500",
            "180\u00b0C/300s",
            "2.5"
          ]
        },
        {
          "rowNumber": 8,
          "cells": [
            "#67",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 9,
          "cells": [
            "\u6bb5\u901f",
            "\u8f49\u901f\u8a2d\u5b9a",
            "\u52a0\u6e1b\u901f\u6642\u9593",
            "\u904b\u8f49\u6642\u9593"
          ]
        },
        {
          "rowNumber": 10,
          "cells": [
            "1                       \uff08\u7d05\u8272\u6709\u53c3\u6578\uff09",
            "300",
            "40",
            "20"
          ]
        },
        {
          "rowNumber": 11,
          "cells": [
            "2",
            "800",
            "40",
            "40"
          ]
        },
        {
          "rowNumber": 12,
          "cells": [
            "3",
            "\u4e3b\u8f49spin coater",
            "40",
            "300"
          ]
        },
        {
          "rowNumber": 13,
          "cells": [
            "4",
            "800",
            "40",
            "40"
          ]
        },
        {
          "rowNumber": 14,
          "cells": [
            "5",
            "300",
            "40",
            "20"
          ]
        },
        {
          "rowNumber": 15,
          "cells": [
            "\uff08\u85cd\u8272\u6c92\u6709\u53c3\u6578\uff09",
            "",
            "",
            ""
          ]
        },
        {
          "rowNumber": 17,
          "cells": [
            "L25\u64cd\u4f5c",
            "\uff081\uff09\u914d\u65b9\u8a2d\u5b9a->\u5bc6\u78bc1111->\u914d\u65b9\u5199\u5165->\u8f38\u516567->\u7de8\u4fee->\u53f3\u908a\u9ec3\u8272\u6b04\u9032\u884c\u7de8\u4feeChyiLaB(\u540c\u6642\u9ede\u64ca\u2193\u78ba\u8a8d\u4e0b\u65b9\u7121\u88ab\u4fee\u6539)->\u5beb\u5165->\u81f3\u8b80\u51fa\u9801->\u518d\u6b21\u8f38\u516567->\u8b80\u51fa->\u96e2\u958b",
            "",
            ""
          ]
        },
        {
          "rowNumber": 18,
          "cells": [
            "",
            "\uff082\uff09\u56de\u4e3b\u76ee\u9304->\u81ea\u52d5\u63a7\u5236\uff08\u78ba\u8a8d\u662fChyiLaB\uff09->\u914d\u65b9\u9009\u62e9\uff08\u78ba\u8a8d67\u548c\u4e3b\u8f49spin\u5beb\u5165)->\u8b80\u51fa->\u96e2\u958b",
            "",
            ""
          ]
        }
      ]
    },
    {
      "id": "manual-develop-recipe",
      "name": "Manual Develop Recipe",
      "minRow": 2,
      "minCol": 2,
      "rows": [
        {
          "rowNumber": 2,
          "cells": [
            "\u5149\u963b\u6210\u5206",
            "\uff081\uff09\u66dd\u540e\u70e4",
            "\uff082\uff09\u663e\u5f71\u65f6\u95f4",
            "\uff083\uff09\u786c\u70e4"
          ]
        },
        {
          "rowNumber": 3,
          "cells": [
            "P015",
            "120\u2103/90s",
            "75s",
            "\u2014\u2014"
          ]
        },
        {
          "rowNumber": 4,
          "cells": [
            "PI38",
            "110\u2103/60s",
            "20s",
            "110\u2103/60s"
          ]
        },
        {
          "rowNumber": 5,
          "cells": [
            "LOR7A&PI38",
            "120\u2103/90s",
            "50s",
            "115\u2103/90s"
          ]
        },
        {
          "rowNumber": 6,
          "cells": [
            "NEB",
            "",
            "",
            ""
          ]
        }
      ]
    },
    {
      "id": "rework",
      "name": "Rework",
      "minRow": 2,
      "minCol": 1,
      "rows": [
        {
          "rowNumber": 2,
          "cells": [
            "Rework",
            "",
            ""
          ]
        },
        {
          "rowNumber": 3,
          "cells": [
            "\u5149\u963b\u4e3aPFI38\uff0cPFI89\uff08\u65e0\u91d1\u5c5e\u65e0\u6c27\u5316\u5c42\uff09",
            "\u5149\u963b\u4e3aPFI38\uff0cPFI89\uff08\u6709\u91d1\u5c5e\u6709\u6c27\u5316\u5c42\uff09",
            "\u5149\u963b\u542bLOR\uff08\u65e0\u91d1\u5c5e\u65e0\u6c27\u5316\u5c42\uff09"
          ]
        },
        {
          "rowNumber": 4,
          "cells": [
            "1\u6ce1ACE-10min",
            "1\u6ce1ACE\u52a0\u70ed75\u2103-5min",
            "\u6ce1PG\uff0c\u76d6\u9521\u7b94\u7eb8\u52a0\u70ed75\u2103-10min"
          ]
        },
        {
          "rowNumber": 5,
          "cells": [
            "2\u9707\u8361",
            "",
            "2\u9707\u8361"
          ]
        },
        {
          "rowNumber": 6,
          "cells": [
            "3 O2 Plasma",
            "2 O2 Plasma",
            "3 O2 Plasma"
          ]
        },
        {
          "rowNumber": 7,
          "cells": [
            "4 \u6ce1BOE\u53bb\u6c27\u5316\u7269",
            "",
            "4 \u6ce1BOE\u53bb\u6c27\u5316\u7269"
          ]
        },
        {
          "rowNumber": 12,
          "cells": [
            "",
            "0",
            ""
          ]
        }
      ]
    }
  ],
  "recipeLookup": [
    {
      "id": "target-pgan-evg-7-3-31",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 7,
      "colOffset": 2,
      "title": "#31 - 90\u2103 / 30 sec",
      "aliases": [
        "#31",
        "Recipe 31",
        "Receipe 31",
        "#31 90\u2103 / 30 sec",
        "Etch Receipe31",
        "Etch Recipe31",
        "Receipe31",
        "Recipe31"
      ],
      "keys": [
        "HASH31",
        "RECIPE31",
        "RECEIPE31",
        "HASH319030SEC",
        "ETCHRECEIPE31",
        "ETCHRECIPE31"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-11-3-62",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 11,
      "colOffset": 2,
      "title": "#62 - 110\u2103 / 60 sec",
      "aliases": [
        "#62",
        "Recipe 62",
        "Receipe 62",
        "#62 110\u2103 / 60 sec",
        "Etch Receipe62",
        "Etch Recipe62",
        "Receipe62",
        "Recipe62"
      ],
      "keys": [
        "HASH62",
        "RECIPE62",
        "RECEIPE62",
        "HASH6211060SEC",
        "ETCHRECEIPE62",
        "ETCHRECIPE62"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-15-3-8",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 15,
      "colOffset": 2,
      "title": "#8 - Etch Receipe8 GaN Zero 3min \u00d7 1Loop",
      "aliases": [
        "#8",
        "Recipe 8",
        "Receipe 8",
        "#8 Etch Receipe8 GaN Zero 3min \u00d7 1Loop",
        "Etch Receipe8",
        "Etch Recipe8",
        "Receipe8",
        "Recipe8"
      ],
      "keys": [
        "HASH8",
        "RECIPE8",
        "RECEIPE8",
        "HASH8ETCHRECEIPE8GANZERO3MIN1LOOP",
        "ETCHRECEIPE8",
        "ETCHRECIPE8"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-23-3-31",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 23,
      "colOffset": 2,
      "title": "#31 - 90\u2103 / 30 sec",
      "aliases": [
        "#31",
        "Recipe 31",
        "Receipe 31",
        "#31 90\u2103 / 30 sec",
        "Etch Receipe31",
        "Etch Recipe31",
        "Receipe31",
        "Recipe31"
      ],
      "keys": [
        "HASH31",
        "RECIPE31",
        "RECEIPE31",
        "HASH319030SEC",
        "ETCHRECEIPE31",
        "ETCHRECIPE31"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-27-3-62",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 27,
      "colOffset": 2,
      "title": "#62 - 110\u2103 / 60 sec",
      "aliases": [
        "#62",
        "Recipe 62",
        "Receipe 62",
        "#62 110\u2103 / 60 sec",
        "Etch Receipe62",
        "Etch Recipe62",
        "Receipe62",
        "Recipe62"
      ],
      "keys": [
        "HASH62",
        "RECIPE62",
        "RECEIPE62",
        "HASH6211060SEC",
        "ETCHRECEIPE62",
        "ETCHRECIPE62"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-31-3-6",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 31,
      "colOffset": 2,
      "title": "#6 - Etch Receipe6 PGaN\uff08\u4e00\u6b21\u53ea\u80fd\u653e\u4e00\u7247\uff0c\u958bEPD\uff09",
      "aliases": [
        "#6",
        "Recipe 6",
        "Receipe 6",
        "#6 Etch Receipe6 PGaN\uff08\u4e00\u6b21\u53ea\u80fd\u653e\u4e00\u7247\uff0c\u958bEPD\uff09",
        "Etch Receipe6",
        "Etch Recipe6",
        "Receipe6",
        "Recipe6"
      ],
      "keys": [
        "HASH6",
        "RECIPE6",
        "RECEIPE6",
        "HASH6ETCHRECEIPE6PGANEPD",
        "ETCHRECEIPE6",
        "ETCHRECIPE6"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-40-3-94",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 40,
      "colOffset": 2,
      "title": "#94 - 90\u2103 / 30 sec",
      "aliases": [
        "#94",
        "Recipe 94",
        "Receipe 94",
        "#94 90\u2103 / 30 sec",
        "Etch Receipe94",
        "Etch Recipe94",
        "Receipe94",
        "Recipe94"
      ],
      "keys": [
        "HASH94",
        "RECIPE94",
        "RECEIPE94",
        "HASH949030SEC",
        "ETCHRECEIPE94",
        "ETCHRECIPE94"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-44-3-86",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 44,
      "colOffset": 2,
      "title": "#86 - 110\u2103 / 120 sec",
      "aliases": [
        "#86",
        "Recipe 86",
        "Receipe 86",
        "#86 110\u2103 / 120 sec",
        "Etch Receipe86",
        "Etch Recipe86",
        "Receipe86",
        "Recipe86"
      ],
      "keys": [
        "HASH86",
        "RECIPE86",
        "RECEIPE86",
        "HASH86110120SEC",
        "ETCHRECEIPE86",
        "ETCHRECIPE86"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-48-3-8",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 48,
      "colOffset": 2,
      "title": "#8 - Etch Receipe8 GaN Zero 4min \u00d7 2Loop \uff08\u5982\u975e\u6a19\u6e96\u7d50\u69cb\u9700\u8003\u616e\u539a\u5ea6\u518d\u5b9a\u6642\u9577\uff09",
      "aliases": [
        "#8",
        "Recipe 8",
        "Receipe 8",
        "#8 Etch Receipe8 GaN Zero 4min \u00d7 2Loop \uff08\u5982\u975e\u6a19\u6e96\u7d50\u69cb\u9700\u8003\u616e\u539a\u5ea6\u518d\u5b9a\u6642\u9577\uff09",
        "Etch Receipe8",
        "Etch Recipe8",
        "Receipe8",
        "Recipe8"
      ],
      "keys": [
        "HASH8",
        "RECIPE8",
        "RECEIPE8",
        "HASH8ETCHRECEIPE8GANZERO4MIN2LOOP",
        "ETCHRECEIPE8",
        "ETCHRECIPE8"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-57-3-94",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 57,
      "colOffset": 2,
      "title": "#94 - 90\u2103 / 30 sec",
      "aliases": [
        "#94",
        "Recipe 94",
        "Receipe 94",
        "#94 90\u2103 / 30 sec",
        "Etch Receipe94",
        "Etch Recipe94",
        "Receipe94",
        "Recipe94"
      ],
      "keys": [
        "HASH94",
        "RECIPE94",
        "RECEIPE94",
        "HASH949030SEC",
        "ETCHRECEIPE94",
        "ETCHRECIPE94"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-61-3-86",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 61,
      "colOffset": 2,
      "title": "#86 - 110\u2103 / 120 sec",
      "aliases": [
        "#86",
        "Recipe 86",
        "Receipe 86",
        "#86 110\u2103 / 120 sec",
        "Etch Receipe86",
        "Etch Recipe86",
        "Receipe86",
        "Recipe86"
      ],
      "keys": [
        "HASH86",
        "RECIPE86",
        "RECEIPE86",
        "HASH86110120SEC",
        "ETCHRECEIPE86",
        "ETCHRECIPE86"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-69-3-601",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 69,
      "colOffset": 2,
      "title": "#601 - E08",
      "aliases": [
        "#601",
        "Recipe 601",
        "Receipe 601",
        "#601 E08",
        "Etch Receipe601",
        "Etch Recipe601",
        "Receipe601",
        "Recipe601"
      ],
      "keys": [
        "HASH601",
        "RECIPE601",
        "RECEIPE601",
        "HASH601E08",
        "ETCHRECEIPE601",
        "ETCHRECIPE601"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-75-3-67",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 75,
      "colOffset": 2,
      "title": "#67 - 3500rpm / 30sec",
      "aliases": [
        "#67",
        "Recipe 67",
        "Receipe 67",
        "#67 3500rpm / 30sec",
        "PFI38",
        "PFI89",
        "LOR7A",
        "LOR-7A",
        "Manual coating PFI38",
        "Manual coating PFI89",
        "Manual coating LOR-7A",
        "Etch Receipe67",
        "Etch Recipe67",
        "Receipe67",
        "Recipe67"
      ],
      "keys": [
        "HASH67",
        "RECIPE67",
        "RECEIPE67",
        "HASH673500RPM30SEC",
        "PFI38",
        "PFI89",
        "LOR7A",
        "MANUALCOATINGPFI38",
        "MANUALCOATINGPFI89",
        "MANUALCOATINGLOR7A",
        "ETCHRECEIPE67",
        "ETCHRECIPE67"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-77-3-31",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 77,
      "colOffset": 2,
      "title": "#31 - 90\u2103 / 30 sec",
      "aliases": [
        "#31",
        "Recipe 31",
        "Receipe 31",
        "#31 90\u2103 / 30 sec",
        "Etch Receipe31",
        "Etch Recipe31",
        "Receipe31",
        "Recipe31"
      ],
      "keys": [
        "HASH31",
        "RECIPE31",
        "RECEIPE31",
        "HASH319030SEC",
        "ETCHRECEIPE31",
        "ETCHRECIPE31"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-81-3-62",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 81,
      "colOffset": 2,
      "title": "#62 - 110\u2103 / 60 sec",
      "aliases": [
        "#62",
        "Recipe 62",
        "Receipe 62",
        "#62 110\u2103 / 60 sec",
        "Etch Receipe62",
        "Etch Recipe62",
        "Receipe62",
        "Recipe62"
      ],
      "keys": [
        "HASH62",
        "RECIPE62",
        "RECEIPE62",
        "HASH6211060SEC",
        "ETCHRECEIPE62",
        "ETCHRECIPE62"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-104-3-67",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 104,
      "colOffset": 2,
      "title": "#67 - 3500rpm / 30sec",
      "aliases": [
        "#67",
        "Recipe 67",
        "Receipe 67",
        "#67 3500rpm / 30sec",
        "PFI38",
        "PFI89",
        "LOR7A",
        "LOR-7A",
        "Manual coating PFI38",
        "Manual coating PFI89",
        "Manual coating LOR-7A",
        "Etch Receipe67",
        "Etch Recipe67",
        "Receipe67",
        "Recipe67"
      ],
      "keys": [
        "HASH67",
        "RECIPE67",
        "RECEIPE67",
        "HASH673500RPM30SEC",
        "PFI38",
        "PFI89",
        "LOR7A",
        "MANUALCOATINGPFI38",
        "MANUALCOATINGPFI89",
        "MANUALCOATINGLOR7A",
        "ETCHRECEIPE67",
        "ETCHRECIPE67"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-106-3-31",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 106,
      "colOffset": 2,
      "title": "#31 - 90\u2103 / 30 sec",
      "aliases": [
        "#31",
        "Recipe 31",
        "Receipe 31",
        "#31 90\u2103 / 30 sec",
        "Etch Receipe31",
        "Etch Recipe31",
        "Receipe31",
        "Recipe31"
      ],
      "keys": [
        "HASH31",
        "RECIPE31",
        "RECEIPE31",
        "HASH319030SEC",
        "ETCHRECEIPE31",
        "ETCHRECIPE31"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-110-3-90",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 110,
      "colOffset": 2,
      "title": "#90 - 120\u2103 / 90 sec",
      "aliases": [
        "#90",
        "Recipe 90",
        "Receipe 90",
        "#90 120\u2103 / 90 sec",
        "Etch Receipe90",
        "Etch Recipe90",
        "Receipe90",
        "Recipe90"
      ],
      "keys": [
        "HASH90",
        "RECIPE90",
        "RECEIPE90",
        "HASH9012090SEC",
        "ETCHRECEIPE90",
        "ETCHRECIPE90"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-131-3-31",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 131,
      "colOffset": 2,
      "title": "#31 - 90\u2103 / 30 sec",
      "aliases": [
        "#31",
        "Recipe 31",
        "Receipe 31",
        "#31 90\u2103 / 30 sec",
        "Etch Receipe31",
        "Etch Recipe31",
        "Receipe31",
        "Recipe31"
      ],
      "keys": [
        "HASH31",
        "RECIPE31",
        "RECEIPE31",
        "HASH319030SEC",
        "ETCHRECEIPE31",
        "ETCHRECIPE31"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-135-3-62",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 135,
      "colOffset": 2,
      "title": "#62 - 110\u2103 / 60 sec",
      "aliases": [
        "#62",
        "Recipe 62",
        "Receipe 62",
        "#62 110\u2103 / 60 sec",
        "Etch Receipe62",
        "Etch Recipe62",
        "Receipe62",
        "Recipe62"
      ],
      "keys": [
        "HASH62",
        "RECIPE62",
        "RECEIPE62",
        "HASH6211060SEC",
        "ETCHRECEIPE62",
        "ETCHRECIPE62"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-139-3-206",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 139,
      "colOffset": 2,
      "title": "#206 - E08",
      "aliases": [
        "#206",
        "Recipe 206",
        "Receipe 206",
        "#206 E08",
        "Etch Receipe206",
        "Etch Recipe206",
        "Receipe206",
        "Recipe206"
      ],
      "keys": [
        "HASH206",
        "RECIPE206",
        "RECEIPE206",
        "HASH206E08",
        "ETCHRECEIPE206",
        "ETCHRECIPE206"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-140-3-0711",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 140,
      "colOffset": 2,
      "title": "#0711 - CHF3/Ar = 30 / 40 sccm OE\uff1a50%",
      "aliases": [
        "#0711",
        "Recipe 0711",
        "Receipe 0711",
        "#0711 CHF3/Ar = 30 / 40 sccm OE\uff1a50%",
        "Etch Receipe0711",
        "Etch Recipe0711",
        "Receipe0711",
        "Recipe0711"
      ],
      "keys": [
        "HASH0711",
        "RECIPE0711",
        "RECEIPE0711",
        "HASH0711CHF3AR3040SCCMOE50",
        "ETCHRECEIPE0711",
        "ETCHRECIPE0711"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-142-3-206",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 142,
      "colOffset": 2,
      "title": "#206 - E08",
      "aliases": [
        "#206",
        "Recipe 206",
        "Receipe 206",
        "#206 E08",
        "Etch Receipe206",
        "Etch Recipe206",
        "Receipe206",
        "Recipe206"
      ],
      "keys": [
        "HASH206",
        "RECIPE206",
        "RECEIPE206",
        "HASH206E08",
        "ETCHRECEIPE206",
        "ETCHRECIPE206"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-143-3-6688",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 143,
      "colOffset": 2,
      "title": "#6688 - BCl3 = 50 sccm OE\uff1a50%",
      "aliases": [
        "#6688",
        "Recipe 6688",
        "Receipe 6688",
        "#6688 BCl3 = 50 sccm OE\uff1a50%",
        "Etch Receipe6688",
        "Etch Recipe6688",
        "Receipe6688",
        "Recipe6688"
      ],
      "keys": [
        "HASH6688",
        "RECIPE6688",
        "RECEIPE6688",
        "HASH6688BCL350SCCMOE50",
        "ETCHRECEIPE6688",
        "ETCHRECIPE6688"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-147-3-601",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 147,
      "colOffset": 2,
      "title": "#601 - O2 plasma",
      "aliases": [
        "#601",
        "Recipe 601",
        "Receipe 601",
        "#601 O2 plasma",
        "Etch Receipe601",
        "Etch Recipe601",
        "Receipe601",
        "Recipe601"
      ],
      "keys": [
        "HASH601",
        "RECIPE601",
        "RECEIPE601",
        "HASH601O2PLASMA",
        "ETCHRECEIPE601",
        "ETCHRECIPE601"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-153-3-67",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 153,
      "colOffset": 2,
      "title": "#67 - 3500rpm / 30sec",
      "aliases": [
        "#67",
        "Recipe 67",
        "Receipe 67",
        "#67 3500rpm / 30sec",
        "PFI38",
        "PFI89",
        "LOR7A",
        "LOR-7A",
        "Manual coating PFI38",
        "Manual coating PFI89",
        "Manual coating LOR-7A",
        "Etch Receipe67",
        "Etch Recipe67",
        "Receipe67",
        "Recipe67"
      ],
      "keys": [
        "HASH67",
        "RECIPE67",
        "RECEIPE67",
        "HASH673500RPM30SEC",
        "PFI38",
        "PFI89",
        "LOR7A",
        "MANUALCOATINGPFI38",
        "MANUALCOATINGPFI89",
        "MANUALCOATINGLOR7A",
        "ETCHRECEIPE67",
        "ETCHRECIPE67"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-155-3-31",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 155,
      "colOffset": 2,
      "title": "#31 - 90\u2103 / 30 sec",
      "aliases": [
        "#31",
        "Recipe 31",
        "Receipe 31",
        "#31 90\u2103 / 30 sec",
        "Etch Receipe31",
        "Etch Recipe31",
        "Receipe31",
        "Recipe31"
      ],
      "keys": [
        "HASH31",
        "RECIPE31",
        "RECEIPE31",
        "HASH319030SEC",
        "ETCHRECEIPE31",
        "ETCHRECIPE31"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-pgan-evg-159-3-90",
      "sheetId": "pgan-evg",
      "sheetName": "PGaN-EVG",
      "rowNumber": 159,
      "colOffset": 2,
      "title": "#90 - 120\u2103 / 90 sec",
      "aliases": [
        "#90",
        "Recipe 90",
        "Receipe 90",
        "#90 120\u2103 / 90 sec",
        "Etch Receipe90",
        "Etch Recipe90",
        "Receipe90",
        "Recipe90"
      ],
      "keys": [
        "HASH90",
        "RECIPE90",
        "RECEIPE90",
        "HASH9012090SEC",
        "ETCHRECEIPE90",
        "ETCHRECIPE90"
      ],
      "kind": "numbered",
      "priority": 20
    },
    {
      "id": "target-e17-etch-metal-receipe-2-1-14",
      "sheetId": "e17-etch-metal-receipe",
      "sheetName": "E17-Etch Metal Receipe",
      "rowNumber": 2,
      "colOffset": 0,
      "title": "#14 - SiO2 / SiN / TiN",
      "aliases": [
        "#14",
        "Recipe 14",
        "Receipe 14",
        "#14 SiO2 / SiN / TiN",
        "Etch Receipe14",
        "Etch Recipe14",
        "Receipe14",
        "Recipe14"
      ],
      "keys": [
        "HASH14",
        "RECIPE14",
        "RECEIPE14",
        "HASH14SIO2SINTIN",
        "ETCHRECEIPE14",
        "ETCHRECIPE14"
      ],
      "kind": "numbered",
      "priority": 100
    },
    {
      "id": "target-e17-etch-metal-receipe-2-7-15",
      "sheetId": "e17-etch-metal-receipe",
      "sheetName": "E17-Etch Metal Receipe",
      "rowNumber": 2,
      "colOffset": 6,
      "title": "#15 - High-K",
      "aliases": [
        "#15",
        "Recipe 15",
        "Receipe 15",
        "#15 High-K",
        "Etch Receipe15",
        "Etch Recipe15",
        "Receipe15",
        "Recipe15"
      ],
      "keys": [
        "HASH15",
        "RECIPE15",
        "RECEIPE15",
        "HASH15HIGHK",
        "ETCHRECEIPE15",
        "ETCHRECIPE15"
      ],
      "kind": "numbered",
      "priority": 100
    },
    {
      "id": "target-e17-etch-metal-receipe-21-1-14",
      "sheetId": "e17-etch-metal-receipe",
      "sheetName": "E17-Etch Metal Receipe",
      "rowNumber": 21,
      "colOffset": 0,
      "title": "#14 - TiN / NiO /TeO",
      "aliases": [
        "#14",
        "Recipe 14",
        "Receipe 14",
        "#14 TiN / NiO /TeO",
        "Etch Receipe14",
        "Etch Recipe14",
        "Receipe14",
        "Recipe14"
      ],
      "keys": [
        "HASH14",
        "RECIPE14",
        "RECEIPE14",
        "HASH14TINNIOTEO",
        "ETCHRECEIPE14",
        "ETCHRECIPE14"
      ],
      "kind": "numbered",
      "priority": 100
    },
    {
      "id": "target-e17-etch-metal-receipe-21-7-14",
      "sheetId": "e17-etch-metal-receipe",
      "sheetName": "E17-Etch Metal Receipe",
      "rowNumber": 21,
      "colOffset": 6,
      "title": "#14 - GaN",
      "aliases": [
        "#14",
        "Recipe 14",
        "Receipe 14",
        "#14 GaN",
        "Etch Receipe14",
        "Etch Recipe14",
        "Receipe14",
        "Recipe14"
      ],
      "keys": [
        "HASH14",
        "RECIPE14",
        "RECEIPE14",
        "HASH14GAN",
        "ETCHRECEIPE14",
        "ETCHRECIPE14"
      ],
      "kind": "numbered",
      "priority": 100
    },
    {
      "id": "target-e16-etch-receipe-2-1-2",
      "sheetId": "e16-etch-receipe",
      "sheetName": "E16-Etch Receipe",
      "rowNumber": 2,
      "colOffset": 0,
      "title": "#2 - AlGaN",
      "aliases": [
        "#2",
        "Recipe 2",
        "Receipe 2",
        "#2 AlGaN",
        "Etch Receipe2",
        "Etch Recipe2",
        "Receipe2",
        "Recipe2"
      ],
      "keys": [
        "HASH2",
        "RECIPE2",
        "RECEIPE2",
        "HASH2ALGAN",
        "ETCHRECEIPE2",
        "ETCHRECIPE2"
      ],
      "kind": "numbered",
      "priority": 100
    },
    {
      "id": "target-e16-etch-receipe-2-6-6",
      "sheetId": "e16-etch-receipe",
      "sheetName": "E16-Etch Receipe",
      "rowNumber": 2,
      "colOffset": 5,
      "title": "#6 - p-GaN\u4e00\u6b21\u53ea\u80fd\u653e\u4e00\u7247                   (\u5148\u9009\u4e0a\u9762\u4e24\u4e2a\u5b50\u8fdb\u7a0b\u770bEPD\uff0c\u518d\u9009\u4e0b\u9762\u4e09\u4e2a\u5b57\u8fdb\u7a0b\uff09",
      "aliases": [
        "#6",
        "Recipe 6",
        "Receipe 6",
        "#6 p-GaN\u4e00\u6b21\u53ea\u80fd\u653e\u4e00\u7247                   (\u5148\u9009\u4e0a\u9762\u4e24\u4e2a\u5b50\u8fdb\u7a0b\u770bEPD\uff0c\u518d\u9009\u4e0b\u9762\u4e09\u4e2a\u5b57\u8fdb\u7a0b\uff09",
        "Etch Receipe6",
        "Etch Recipe6",
        "Receipe6",
        "Recipe6"
      ],
      "keys": [
        "HASH6",
        "RECIPE6",
        "RECEIPE6",
        "HASH6PGANEPD",
        "ETCHRECEIPE6",
        "ETCHRECIPE6"
      ],
      "kind": "numbered",
      "priority": 100
    },
    {
      "id": "target-e16-etch-receipe-2-11-8",
      "sheetId": "e16-etch-receipe",
      "sheetName": "E16-Etch Receipe",
      "rowNumber": 2,
      "colOffset": 10,
      "title": "#8 - GaN Zero",
      "aliases": [
        "#8",
        "Recipe 8",
        "Receipe 8",
        "#8 GaN Zero",
        "Etch Receipe8",
        "Etch Recipe8",
        "Receipe8",
        "Recipe8"
      ],
      "keys": [
        "HASH8",
        "RECIPE8",
        "RECEIPE8",
        "HASH8GANZERO",
        "ETCHRECEIPE8",
        "ETCHRECIPE8"
      ],
      "kind": "numbered",
      "priority": 100
    },
    {
      "id": "target-e16-etch-receipe-2-18-10",
      "sheetId": "e16-etch-receipe",
      "sheetName": "E16-Etch Receipe",
      "rowNumber": 2,
      "colOffset": 17,
      "title": "#10 - Cl Clean",
      "aliases": [
        "#10",
        "Recipe 10",
        "Receipe 10",
        "#10 Cl Clean",
        "Etch Receipe10",
        "Etch Recipe10",
        "Receipe10",
        "Recipe10"
      ],
      "keys": [
        "HASH10",
        "RECIPE10",
        "RECEIPE10",
        "HASH10CLCLEAN",
        "ETCHRECEIPE10",
        "ETCHRECIPE10"
      ],
      "kind": "numbered",
      "priority": 100
    },
    {
      "id": "target-e16-etch-receipe-21-1-15",
      "sheetId": "e16-etch-receipe",
      "sheetName": "E16-Etch Receipe",
      "rowNumber": 21,
      "colOffset": 0,
      "title": "#15 - AlGaN Fast",
      "aliases": [
        "#15",
        "Recipe 15",
        "Receipe 15",
        "#15 AlGaN Fast",
        "Etch Receipe15",
        "Etch Recipe15",
        "Receipe15",
        "Recipe15"
      ],
      "keys": [
        "HASH15",
        "RECIPE15",
        "RECEIPE15",
        "HASH15ALGANFAST",
        "ETCHRECEIPE15",
        "ETCHRECIPE15"
      ],
      "kind": "numbered",
      "priority": 100
    },
    {
      "id": "target-e16-etch-receipe-21-6-17",
      "sheetId": "e16-etch-receipe",
      "sheetName": "E16-Etch Receipe",
      "rowNumber": 21,
      "colOffset": 5,
      "title": "#17 - GaN Chyi for Mesa",
      "aliases": [
        "#17",
        "Recipe 17",
        "Receipe 17",
        "#17 GaN Chyi for Mesa",
        "Etch Receipe17",
        "Etch Recipe17",
        "Receipe17",
        "Recipe17"
      ],
      "keys": [
        "HASH17",
        "RECIPE17",
        "RECEIPE17",
        "HASH17GANCHYIFORMESA",
        "ETCHRECEIPE17",
        "ETCHRECIPE17"
      ],
      "kind": "numbered",
      "priority": 100
    },
    {
      "id": "target-e16-etch-receipe-21-11-19",
      "sheetId": "e16-etch-receipe",
      "sheetName": "E16-Etch Receipe",
      "rowNumber": 21,
      "colOffset": 10,
      "title": "#19 - Ebeam 0",
      "aliases": [
        "#19",
        "Recipe 19",
        "Receipe 19",
        "#19 Ebeam 0",
        "Etch Receipe19",
        "Etch Recipe19",
        "Receipe19",
        "Recipe19"
      ],
      "keys": [
        "HASH19",
        "RECIPE19",
        "RECEIPE19",
        "HASH19EBEAM0",
        "ETCHRECEIPE19",
        "ETCHRECIPE19"
      ],
      "kind": "numbered",
      "priority": 100
    },
    {
      "id": "target-manual-coting-receipe-8-1-67",
      "sheetId": "manual-coting-receipe",
      "sheetName": "Manual Coting Receipe",
      "rowNumber": 8,
      "colOffset": 0,
      "title": "#67",
      "aliases": [
        "#67",
        "Recipe 67",
        "Receipe 67",
        "PFI38",
        "PFI89",
        "LOR7A",
        "LOR-7A",
        "Manual coating PFI38",
        "Manual coating PFI89",
        "Manual coating LOR-7A",
        "Etch Receipe67",
        "Etch Recipe67",
        "Receipe67",
        "Recipe67"
      ],
      "keys": [
        "HASH67",
        "RECIPE67",
        "RECEIPE67",
        "PFI38",
        "PFI89",
        "LOR7A",
        "MANUALCOATINGPFI38",
        "MANUALCOATINGPFI89",
        "MANUALCOATINGLOR7A",
        "ETCHRECEIPE67",
        "ETCHRECIPE67"
      ],
      "kind": "numbered",
      "priority": 90
    },
    {
      "id": "target-clean-receipe-3-clean",
      "sheetId": "clean-receipe",
      "sheetName": "Clean Receipe",
      "rowNumber": 3,
      "colOffset": 0,
      "title": "SC-1",
      "aliases": [
        "SC-1"
      ],
      "keys": [
        "SC1"
      ],
      "kind": "clean",
      "priority": 90
    },
    {
      "id": "target-clean-receipe-4-clean",
      "sheetId": "clean-receipe",
      "sheetName": "Clean Receipe",
      "rowNumber": 4,
      "colOffset": 0,
      "title": "SC-2",
      "aliases": [
        "SC-2"
      ],
      "keys": [
        "SC2"
      ],
      "kind": "clean",
      "priority": 90
    },
    {
      "id": "target-clean-receipe-5-clean",
      "sheetId": "clean-receipe",
      "sheetName": "Clean Receipe",
      "rowNumber": 5,
      "colOffset": 0,
      "title": "BOE",
      "aliases": [
        "BOE"
      ],
      "keys": [
        "BOE"
      ],
      "kind": "clean",
      "priority": 90
    },
    {
      "id": "target-clean-receipe-6-clean",
      "sheetId": "clean-receipe",
      "sheetName": "Clean Receipe",
      "rowNumber": 6,
      "colOffset": 0,
      "title": "SPM(\u6709\u91d1\u5c6c\u4e0d\u53ef\u7528)",
      "aliases": [
        "SPM(\u6709\u91d1\u5c6c\u4e0d\u53ef\u7528)"
      ],
      "keys": [
        "SPM"
      ],
      "kind": "clean",
      "priority": 90
    },
    {
      "id": "target-clean-receipe-7-clean",
      "sheetId": "clean-receipe",
      "sheetName": "Clean Receipe",
      "rowNumber": 7,
      "colOffset": 0,
      "title": "\u53bb\u91d1\u5c6c",
      "aliases": [
        "\u53bb\u91d1\u5c6c"
      ],
      "keys": [],
      "kind": "clean",
      "priority": 90
    },
    {
      "id": "target-clean-receipe-8-clean",
      "sheetId": "clean-receipe",
      "sheetName": "Clean Receipe",
      "rowNumber": 8,
      "colOffset": 0,
      "title": "\u53bb\u5149\u963b",
      "aliases": [
        "\u53bb\u5149\u963b"
      ],
      "keys": [],
      "kind": "clean",
      "priority": 90
    },
    {
      "id": "target-clean-receipe-9-clean",
      "sheetId": "clean-receipe",
      "sheetName": "Clean Receipe",
      "rowNumber": 9,
      "colOffset": 0,
      "title": "SiNx",
      "aliases": [
        "SiNx"
      ],
      "keys": [
        "SINX"
      ],
      "kind": "clean",
      "priority": 90
    },
    {
      "id": "target-manual-develop-recipe-3-develop",
      "sheetId": "manual-develop-recipe",
      "sheetName": "Manual Develop Recipe",
      "rowNumber": 3,
      "colOffset": 0,
      "title": "P015",
      "aliases": [
        "P015",
        "PFI89",
        "PI89",
        "Manual development PFI89",
        "Manual develop PFI89"
      ],
      "keys": [
        "P015",
        "PFI89",
        "PI89",
        "MANUALDEVELOPMENTPFI89",
        "MANUALDEVELOPPFI89"
      ],
      "kind": "develop",
      "priority": 90
    },
    {
      "id": "target-manual-develop-recipe-4-develop",
      "sheetId": "manual-develop-recipe",
      "sheetName": "Manual Develop Recipe",
      "rowNumber": 4,
      "colOffset": 0,
      "title": "PI38",
      "aliases": [
        "PI38",
        "PFI38",
        "Manual development PFI38",
        "Manual develop PFI38"
      ],
      "keys": [
        "PI38",
        "PFI38",
        "MANUALDEVELOPMENTPFI38",
        "MANUALDEVELOPPFI38"
      ],
      "kind": "develop",
      "priority": 90
    },
    {
      "id": "target-manual-develop-recipe-5-develop",
      "sheetId": "manual-develop-recipe",
      "sheetName": "Manual Develop Recipe",
      "rowNumber": 5,
      "colOffset": 0,
      "title": "LOR7A&PI38",
      "aliases": [
        "LOR7A&PI38",
        "LOR7A+PFI38",
        "LOR+PFI38",
        "P-DEV-PFI38-LOR",
        "Manual development LOR+PFI38"
      ],
      "keys": [
        "LOR7API38",
        "LOR7APFI38",
        "LORPFI38",
        "PDEVPFI38LOR",
        "MANUALDEVELOPMENTLORPFI38"
      ],
      "kind": "develop",
      "priority": 90
    },
    {
      "id": "target-photo-track-pfi38",
      "sheetId": "photo-recipes",
      "sheetName": "Photo Recipes",
      "rowNumber": "",
      "colOffset": 0,
      "title": "P-COT-PFI38",
      "aliases": [
        "P-COT-PFI38",
        "P-DEV-PFI38-90S",
        "P-DEV-PFI38",
        "PFI38 TRACK"
      ],
      "keys": [
        "PCOTPFI38",
        "PDEVPFI3890S",
        "PDEVPFI38",
        "PFI38TRACK"
      ],
      "kind": "photo",
      "priority": 85
    },
    {
      "id": "target-photo-track-pfi89",
      "sheetId": "photo-recipes",
      "sheetName": "Photo Recipes",
      "rowNumber": "",
      "colOffset": 0,
      "title": "P-COT-PFI89",
      "aliases": [
        "P-COT-PFI89",
        "P-DEV-PFI89",
        "PFI89 TRACK"
      ],
      "keys": [
        "PCOTPFI89",
        "PDEVPFI89",
        "PFI89TRACK"
      ],
      "kind": "photo",
      "priority": 85
    },
    {
      "id": "target-photo-track-lor-pfi38",
      "sheetId": "photo-recipes",
      "sheetName": "Photo Recipes",
      "rowNumber": "",
      "colOffset": 0,
      "title": "LOR + P-COT-PFI38",
      "aliases": [
        "P-DEV-PFI38-LOR",
        "P-COT-PFI38 LOR",
        "LOR PFI38 TRACK"
      ],
      "keys": [
        "PDEVPFI38LOR",
        "PCOTPFI38LOR",
        "LORPFI38TRACK"
      ],
      "kind": "photo",
      "priority": 85
    }
  ]
};

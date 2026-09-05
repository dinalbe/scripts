(function(){
    try {
        var om = document.getElementById('custom-cambio-master');
        if (om) om.remove();
        var si_old = document.getElementById('cambio-shared-iframe');
        if (si_old) si_old.remove();

        var ov = document.createElement('div');
        ov.id = 'custom-cambio-master';
        ov.style = 'position:fixed;bottom:15px;right:15px;width:520px;background:#1e293b;color:#f8fafc;padding:20px;border-radius:12px;z-index:1000000;box-shadow:0 25px 35px -5px rgba(0,0,0,0.7);border:1px solid #334155;font-family:Arial,sans-serif;';
        ov.innerHTML = '<h3 style="margin-top:0;margin-bottom:12px;font-size:16px;color:#38bdf8;border-bottom:1px solid #334155;padding-bottom:6px;display:flex;justify-content:space-between;align-items:center;"><span>Progetto CAMBIO - Master Control</span><button type="button" id="cb-btn-chiudi" style="background:none;border:none;color:#94a3b8;font-size:18px;cursor:pointer;font-weight:bold;padding:0 4px;">&times;</button></h3>' +
            '<div style="display:flex;gap:8px;margin-bottom:8px;">' +
                '<div style="flex:2;"><label style="font-size:10px;color:#94a3b8;display:block;margin-bottom:2px;">Linea</label><select id="cb-linea" style="width:100%;padding:6px;background:#0f172a;border:1px solid #475569;color:#fff;border-radius:4px;"><option value="" selected>-- LINEA --</option><option value="MSC">MSC</option><option value="HAPAG">HAPAG</option><option value="SOGECO">SOGECO</option><option value="VARIE">VARIE</option><option value="YANG MING">YANG MING</option></select></div>' +
                '<div style="flex:1;"><label style="font-size:10px;color:#38bdf8;font-weight:bold;display:block;margin-bottom:2px;">Codice Linea</label><input type="text" id="cb-lineacode" readonly placeholder="COD" style="width:100%;box-sizing:border-box;padding:6px;background:#0f172a;border:1px solid #38bdf8;color:#38bdf8;text-align:center;border-radius:4px;font-weight:bold;"></div>' +
            '</div>' +
            '<div style="display:flex;gap:8px;margin-bottom:8px;">' +
                '<div style="flex:1;"><label style="font-size:10px;color:#94a3b8;display:block;margin-bottom:2px;">Tipo ISO</label><select id="cb-iso" style="width:100%;padding:6px;background:#0f172a;border:1px solid #475569;color:#fff;border-radius:4px;"><option value="22G1">22G1</option><option value="42G1">42G1</option><option value="45G1">45G1</option><option value="22R1">22R1</option><option value="45R1">45R1</option><option value="L5R1">L5R1</option><option value="22U1">22U1</option><option value="42U1">42U1</option><option value="45U1">45U1</option></select></div>' +
                '<div style="flex:1;"><label style="font-size:10px;color:#94a3b8;display:block;margin-bottom:2px;">Provenienza</label><select id="cb-origine" style="width:100%;padding:6px;background:#0f172a;border:1px solid #475569;color:#fff;border-radius:4px;"><option value="DA LORENZINI">DA LORENZINI</option><option value="DA TDT">DA TDT</option></select></div>' +
            '</div>' +
            '<div style="display:flex;gap:8px;margin-bottom:8px;">' +
                '<div style="flex:1;"><label style="font-size:10px;color:#94a3b8;display:block;margin-bottom:2px;">Container Arrivo (Rotto)</label><input type="text" id="cb-cntr-arrivo" placeholder="ARRIVO..." style="width:100%;box-sizing:border-box;padding:6px;background:#0f172a;border:1px solid #475569;color:#fff;border-radius:4px;text-transform:uppercase;"></div>' +
                '<div style="flex:1;"><label style="font-size:10px;color:#94a3b8;display:block;margin-bottom:2px;">Vettore</label><input type="text" id="cb-vettore" placeholder="VETTORE..." style="width:100%;box-sizing:border-box;padding:6px;background:#0f172a;border:1px solid #475569;color:#fff;border-radius:4px;text-transform:uppercase;"></div>' +
            '</div>' +
            '<div style="display:flex;gap:8px;margin-bottom:8px;">' +
                '<div style="flex:1;"><label style="font-size:10px;color:#94a3b8;display:block;margin-bottom:2px;">Targa</label><input type="text" id="cb-targa" placeholder="TARGA..." style="width:100%;box-sizing:border-box;padding:6px;background:#0f172a;border:1px solid #475569;color:#fff;border-radius:4px;text-transform:uppercase;"></div>' +
                '<div style="flex:1;"><label style="font-size:10px;color:#94a3b8;display:block;margin-bottom:2px;">Autista</label><input type="text" id="cb-autista" placeholder="AUTISTA..." style="width:100%;box-sizing:border-box;padding:6px;background:#0f172a;border:1px solid #475569;color:#fff;border-radius:4px;text-transform:uppercase;"></div>' +
            '</div>' +
            '<div style="display:flex;gap:8px;margin-bottom:8px;">' +
                '<div style="flex:1;"><label style="font-size:10px;color:#38bdf8;font-weight:bold;display:block;margin-bottom:2px;">Booking</label><input type="text" id="cb-booking" placeholder="BOOKING..." style="width:100%;box-sizing:border-box;padding:6px;background:#0f172a;border:1px solid #38bdf8;color:#fff;border-radius:4px;text-transform:uppercase;"></div>' +
                '<div style="flex:1;"><label style="font-size:10px;color:#38bdf8;font-weight:bold;display:block;margin-bottom:2px;">Container Nuovo</label><input type="text" id="cb-cntr-nuovo" placeholder="NUOVO..." style="width:100%;box-sizing:border-box;padding:6px;background:#0f172a;border:1px solid #38bdf8;color:#fff;border-radius:4px;text-transform:uppercase;"></div>' +
            '</div>' +
            '<div style="display:flex;gap:8px;margin-bottom:8px;">' +
                '<div style="flex:1;"><label style="font-size:10px;color:#94a3b8;display:block;margin-bottom:2px;">Nota Finale</label><input type="text" id="cb-nota" value="CAMBIO" style="width:100%;box-sizing:border-box;padding:6px;background:#0f172a;border:1px solid #475569;color:#fff;border-radius:4px;text-transform:uppercase;"></div>' +
            '</div>' +
            '<div style="display:flex;justify-content:space-between;gap:4px;border-top:1px solid #334155;padding-top:12px;">' +
                '<button type="button" id="cb-btn-fase1" style="flex:1;padding:8px 4px;background:#22c55e;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;font-size:10px;">1. IN</button>' +
                '<button type="button" id="cb-btn-fase2" style="flex:1;padding:8px 4px;background:#d97706;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;font-size:10px;">2. BKG</button>' +
                '<button type="button" id="cb-btn-fase3" style="flex:1;padding:8px 4px;background:#2563eb;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;font-size:10px;">3. OUT</button>' +
                '<button type="button" id="cb-btn-fase4" style="flex:1;padding:8px 4px;background:#9333ea;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;font-size:10px;">4. EXCEL</button>' +
            '</div>';

        document.body.appendChild(ov);

        var lineCodes = {'HAPAG':'200','VARIE':'114','MSC':'95','SOGECO':'57','YANG MING':'32'};
        document.getElementById('cb-linea').onchange = function() {
            document.getElementById('cb-lineacode').value = lineCodes[this.value] || '';
        };

        var tis = ov.querySelectorAll('input[type="text"]');
        for (var i = 0; i < tis.length; i++) {
            if (tis[i].id !== 'cb-lineacode') {
                tis[i].oninput = function() { this.value = this.value.toUpperCase(); };
            }
        }

        function closeAll() {
            var pl = document.getElementById('custom-cambio-master');
            if (pl) pl.remove();
            var si = document.getElementById('cambio-shared-iframe');
            if (si) si.remove();
        }
        document.getElementById('cb-btn-chiudi').onclick = closeAll;

        function getSharedIfr() {
            var id = 'cambio-shared-iframe';
            var ifr = document.getElementById(id);
            if (!ifr) {
                ifr = document.createElement('iframe');
                ifr.id = id;
                ifr.name = id;
                ifr.style = 'position:fixed;top:250px;left:15px;width:calc(100vw - 30px);height:450px;border:2px solid #38bdf8;background:#0f172a;border-radius:8px;box-sizing:border-box;z-index:999999;display:block;box-shadow:0 15px 25px rgba(0,0,0,0.6);';
                document.body.appendChild(ifr);
            }
            return ifr;
        }

        // FASE 1: GATE IN
        document.getElementById('cb-btn-fase1').onclick = function() {
            var ca = document.getElementById('cb-cntr-arrivo').value.toUpperCase();
            var vt = document.getElementById('cb-vettore').value.toUpperCase();
            var tr = document.getElementById('cb-targa').value.toUpperCase();
            var au = document.getElementById('cb-autista').value.toUpperCase();
            var bk = document.getElementById('cb-booking').value.toUpperCase();
            var nt = document.getElementById('cb-nota').value.toUpperCase();
            var iso = document.getElementById('cb-iso').value;
            var lin = document.getElementById('cb-linea').value;

            if (!ca || !bk) { alert("Inserisci Container Arrivo e Booking!"); return; }

            var ifr = getSharedIfr();
            ifr.src = 'https://livorno.contrepair.com/inout.php';
            ifr.onload = function() {
                try {
                    var idoc = ifr.contentDocument || ifr.contentWindow.document;
                    if (!idoc) return;
                    setTimeout(function() {
                        var lineField = idoc.querySelector('#sel_Line, select[name="rec[LINE]"]');
                        if (lineField) {
                            for (var l = 0; l < lineField.options.length; l++) {
                                if (lineField.options[l].value.toUpperCase().indexOf(lin) !== -1 || lineField.options[l].text.toUpperCase().indexOf(lin) !== -1) {
                                    lineField.selectedIndex = l;
                                    break;
                                }
                            }
                            lineField.dispatchEvent(new Event('change', {bubbles:true}));
                        }
                        var cntrField = idoc.querySelector('input[name="container"], input#container');
                        if (cntrField) {
                            cntrField.focus();
                            cntrField.value = ca;
                            cntrField.dispatchEvent(new Event('input', {bubbles:true}));
                            cntrField.dispatchEvent(new Event('change', {bubbles:true}));
                        }
                        var typeField = idoc.querySelector('#sel_Type, select[name="rec[TIPO]"]');
                        if (typeField) {
                            typeField.value = iso;
                            typeField.dispatchEvent(new Event('change', {bubbles:true}));
                        }
                        var prenField = idoc.querySelector('#rec\\\[PRENOTAZIONE\\\], input[name="rec[PRENOTAZIONE]"]');
                        if (prenField) {
                            prenField.value = bk;
                            prenField.dispatchEvent(new Event('input', {bubbles:true}));
                        }
                        var truckField = idoc.querySelector('#txt_Intrucker, input[name="rec[IN_TRASPORTAT]"]');
                        if (truckField) {
                            truckField.value = vt;
                            truckField.dispatchEvent(new Event('input', {bubbles:true}));
                        }
                        var plateField = idoc.querySelector('#txt_Intruckplate, input[name="rec[IN_MEZZO]"]');
                        if (plateField) {
                            plateField.value = tr;
                            plateField.dispatchEvent(new Event('input', {bubbles:true}));
                        }
                        var driverField = idoc.querySelector('#txt_Indriver, input[name="rec[IN_AUTISTA]"]');
                        if (driverField) {
                            driverField.value = au;
                            driverField.dispatchEvent(new Event('input', {bubbles:true}));
                        }
                        var noteField = idoc.querySelector('textarea#rec\\\[NOTE\\\], textarea, input[name="rec[NOTE]"]');
                        if (noteField) {
                            noteField.value = nt;
                            noteField.dispatchEvent(new Event('input', {bubbles:true}));
                        }
                        setTimeout(function() {
                            var realSearch = idoc.querySelector('input[name="cerca"], input[value="Search"], input[type="search"]');
                            if (realSearch) realSearch.click();
                            setTimeout(function() {
                                var realSave = idoc.querySelector('input[name="save"]');
                                if (realSave) realSave.click();
                                setTimeout(function() {
                                    var si_target = document.getElementById('cambio-shared-iframe');
                                    if (si_target) si_target.remove();
                                }, 1200);
                            }, 1000);
                        }, 500);
                    }, 400);
                } catch(err) { console.error(err); }
            };
        };

        // FASE 2: BOOKING / RELEASE ORDERS (INSERIMENTO CONTAINER NUOVO)
        document.getElementById('cb-btn-fase2').onclick = function() {
            var bk = document.getElementById('cb-booking').value.toUpperCase();
            var cnNuovo = document.getElementById('cb-cntr-nuovo').value.toUpperCase();
            var iso = document.getElementById('cb-iso').value;
            var lineCode = document.getElementById('cb-lineacode').value;

            if (!bk || !cnNuovo) { alert("Inserisci Booking e Container Nuovo!"); return; }
            if (!lineCode) { alert("Seleziona una Linea valida nel banner!"); return; }

            var ifr = getSharedIfr();
            ifr.src = 'https://livorno.contrepair.com/book/release_orders.php';
            ifr.onload = function() {
                try {
                    var idoc = ifr.contentDocument || ifr.contentWindow.document;
                    if (!idoc) return;
                    if (ifr.contentWindow) {
                        ifr.contentWindow.alert = function() { return true; };
                        ifr.contentWindow.confirm = function() { return true; };
                    }
                    setTimeout(function() {
                        var searchInput = idoc.querySelector('input[x-ref="search"], input[x-model="numero"], input[type="text"]');
                        if (searchInput) {
                            searchInput.focus();
                            searchInput.value = bk;
                            searchInput.dispatchEvent(new Event('input', {bubbles:true}));
                            searchInput.dispatchEvent(new Event('change', {bubbles:true}));
                            setTimeout(function() {
                                var cercaBtn = null;
                                var btns = idoc.querySelectorAll('button');
                                for (var i = 0; i < btns.length; i++) {
                                    if (btns[i].textContent.trim().toUpperCase().indexOf('CERCA') !== -1 || btns[i].textContent.trim().toUpperCase().indexOf('SEARCH') !== -1) {
                                        cercaBtn = btns[i];
                                        break;
                                    }
                                }
                                if (cercaBtn) cercaBtn.click();
                                setTimeout(function() {
                                    var okBtn = null;
                                    var allB = idoc.querySelectorAll('button');
                                    for (var k = 0; k < allB.length; k++) {
                                        if (allB[k].textContent.trim().toUpperCase() === 'OK') {
                                            okBtn = allB[k];
                                            break;
                                        }
                                    }
                                    if (okBtn) okBtn.click();
                                    setTimeout(function() {
                                        var lineaInput = idoc.querySelector('input#linea-text');
                                        if (lineaInput) {
                                            lineaInput.focus();
                                            lineaInput.value = lineCode;
                                            lineaInput.dispatchEvent(new Event('input', {bubbles:true}));
                                            lineaInput.dispatchEvent(new Event('change', {bubbles:true}));
                                        }
                                        setTimeout(function() {
                                            var cntrInput = idoc.querySelector('.dpform table tbody tr td input[type="text"][x-model="item.container"]');
                                            if (!cntrInput) cntrInput = idoc.querySelector('input[x-model="item.container"]');
                                            if (cntrInput) {
                                                cntrInput.removeAttribute('disabled');
                                                cntrInput.focus();
                                                cntrInput.value = cnNuovo;
                                                cntrInput.dispatchEvent(new Event('input', {bubbles:true}));
                                                cntrInput.dispatchEvent(new Event('change', {bubbles:true}));
                                                cntrInput.dispatchEvent(new Event('blur', {bubbles:true}));
                                            }
                                            setTimeout(function() {
                                                var tipoSelect = idoc.querySelector('.dpform table tbody tr td select[name="tipo"]');
                                                if (!tipoSelect) tipoSelect = idoc.querySelector('select[name="tipo"]');
                                                if (tipoSelect) {
                                                    tipoSelect.removeAttribute('disabled');
                                                    tipoSelect.value = iso;
                                                    tipoSelect.dispatchEvent(new Event('change', {bubbles:true}));
                                                }
                                                setTimeout(function() {
                                                    var saveBtn = idoc.querySelector('button[type="submit"]');
                                                    if (saveBtn) saveBtn.click();
                                                    setTimeout(function() {
                                                        var si_target = document.getElementById('cambio-shared-iframe');
                                                        if (si_target) si_target.remove();
                                                    }, 1200);
                                                }, 800);
                                            }, 800);
                                        }, 800);
                                    }, 1000);
                                }, 800);
                            }, 600);
                        }
                    }, 600);
                } catch(err) { console.error(err); }
            };
        };

        // FASE 3: GATE OUT / USCITA CONTAINER
        document.getElementById('cb-btn-fase3').onclick = function() {
            var cn = document.getElementById('cb-cntr-nuovo').value.toUpperCase();
            var vt = document.getElementById('cb-vettore').value.toUpperCase();
            var tr = document.getElementById('cb-targa').value.toUpperCase();
            var au = document.getElementById('cb-autista').value.toUpperCase();
            if (!cn) { alert("Inserisci il Container Nuovo per la Fase 3!"); return; }

            var ifr = getSharedIfr();
            ifr.src = 'https://livorno.contrepair.com/inout.php';
            ifr.onload = function() {
                try {
                    var idoc = ifr.contentDocument || ifr.contentWindow.document;
                    if (!idoc) return;
                    setTimeout(function() {
                        var cntrField = idoc.querySelector('input[name="container"], input#container');
                        if (cntrField) {
                            cntrField.focus();
                            cntrField.value = cn;
                            cntrField.dispatchEvent(new Event('input', {bubbles:true}));
                            cntrField.dispatchEvent(new Event('change', {bubbles:true}));
                        }
                        var truckField = idoc.querySelector('#txt_Outrucker, input[name="rec[OUT_TRASPORTAT]"]');
                        if (truckField) {
                            truckField.value = vt;
                            truckField.dispatchEvent(new Event('input', {bubbles:true}));
                        }
                        var plateField = idoc.querySelector('#txt_Outruckplate, input[name="rec[OUT_MEZZO]"]');
                        if (plateField) {
                            plateField.value = tr;
                            plateField.dispatchEvent(new Event('input', {bubbles:true}));
                        }
                        var driverField = idoc.querySelector('#txt_Outdriver, input[name="rec[OUT_AUTISTA]"]');
                        if (driverField) {
                            driverField.value = au;
                            driverField.dispatchEvent(new Event('input', {bubbles:true}));
                        }
                        setTimeout(function() {
                            var realSearch = idoc.querySelector('input[name="cerca"], input[value="Search"], input[type="search"]');
                            if (realSearch) realSearch.click();
                            setTimeout(function() {
                                var realSave = idoc.querySelector('input[name="save"]');
                                if (realSave) realSave.click();
                                setTimeout(function() {
                                    var si_target = document.getElementById('cambio-shared-iframe');
                                    if (si_target) si_target.remove();
                                }, 1200);
                            }, 1000);
                        }, 500);
                    }, 400);
                } catch(err) { console.error(err); }
            };
        };

        // FASE 4: EXCEL / TABELLA RIEPILOGATIVA
        document.getElementById('cb-btn-fase4').onclick = function() {
            var og = document.getElementById('cb-origine').value;
            var bk = document.getElementById('cb-booking').value.toUpperCase();
            var cn = document.getElementById('cb-cntr-nuovo').value.toUpperCase();
            var ca = document.getElementById('cb-cntr-arrivo').value.toUpperCase();
            var vt = document.getElementById('cb-vettore').value.toUpperCase();

            if (!cn || !bk) { alert("Inserisci Booking e Container Nuovo per generare l'Excel!"); return; }

            var win = window.open('about:blank', '_blank', 'width=750,height=450');
            if (win) {
                win.document.write('<!DOCTYPE html><html><head><title>Tabella Excel - Progetto CAMBIO</title></head><body style="background:#1e293b;color:#f8fafc;font-family:Arial,sans-serif;padding:24px;margin:0;">' +
                    '<h3 style="color:#38bdf8;border-bottom:1px solid #334155;padding-bottom:8px;margin-top:0;">Tabella Pronta per Email (Progetto CAMBIO)</h3>' +
                    '<div style="overflow-x:auto;margin-bottom:20px;">' +
                        '<table id="tbl-export" style="width:100%;border-collapse:collapse;background:#0f172a;color:#fff;text-align:center;font-size:13px;">' +
                            '<thead><tr style="background:#334155;color:#38bdf8;"><th style="border:1px solid #475569;padding:10px;">BOOKING</th><th style="border:1px solid #475569;padding:10px;">CONTREPAIR LI</th><th style="border:1px solid #475569;padding:10px;">' + og + '</th><th style="border:1px solid #475569;padding:10px;">TRASPORTATORE</th></tr></thead>' +
                            '<tbody><tr><td style="border:1px solid #475569;padding:10px;">' + bk + '</td><td style="border:1px solid #475569;padding:10px;">' + cn + '</td><td style="border:1px solid #475569;padding:10px;">' + ca + '</td><td style="border:1px solid #475569;padding:10px;">' + vt + '</td></tr></tbody>' +
                        '</table>' +
                    '</div>' +
                    '<div style="display:flex;justify-content:flex-end;gap:10px;">' +
                        '<button type="button" id="btn-chiudi-w" style="padding:10px 16px;background:#475569;color:#fff;border:none;border-radius:6px;cursor:pointer;">Chiudi</button>' +
                        '<button type="button" id="btn-copia-w" style="padding:10px 20px;background:#2563eb;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:bold;">Copia Tabella e Chiudi</button>' +
                    '</div>' +
                    '<script>' +
                        'document.getElementById("btn-chiudi-w").onclick=function(){window.close();};' +
                        'document.getElementById("btn-copia-w").onclick=function(){var t=document.getElementById("tbl-export");var r=document.createRange();r.selectNode(t);window.getSelection().removeAllRanges();window.getSelection().addRange(r);try{document.execCommand("copy");}catch(e){}window.getSelection().removeAllRanges();window.close();};' +
                    '<\/script>' +
                '</body></html>');
                win.document.close();
            }
        };

        document.getElementById('cb-cntr-arrivo').focus();
    } catch(e) { alert("Errore: " + e.message); }
})();
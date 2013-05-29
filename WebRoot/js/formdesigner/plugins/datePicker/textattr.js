formdesigner.dialogs.add('TextBox', (function() {
    function initEvent(controlID) {
        $("#configure_tabs").tabs();
        $("#save").button().click(function(event) {
            event.preventDefault();
            var controlType="TextBox";
            formdesigner.setContorlValue({
                Required: $("#required")[0].checked,
                Rows: $("#controlRow").val(),
                Cols: $("#controlCol").val(),
                ControlType: controlType,
                OldID: controlID,
                ID: $("#controlId").val(),
                Name: $("#controlId").val(),
                Text: $("#controlName").val(),
                DefaultValue: $("#controlValue").val(),
                DataType: $("#datatype").val(),
                AccessPattern: $("#accesspattern").val(),
                Width: $("#controlWidth").val(),
                Height: $("#controlHeight").val(),
                DataSource: $("#controlDataSource").val()
            }, 1);
            $("#actionDialog").dialog("close");

        });
        $("#cancel").button().click(function(event) {
            event.preventDefault();
           $("#actionDialog").dialog("close");
        });
        $("#controlId").click(function() {
            configure.getDataSource({
                ID: this.id,
                form: form
            });
        });
        var fields = form.Fields;
        for(var i = 0; i < fields.length; i++) {
            if(fields[i].Name == controlID) {
                $("#controlId").val(fields[i].Name);
                $("#controlName").val(fields[i].Text);
                $("#controlValue").val(fields[i].DefaultValue);
                $("#datatype").val(fields[i].DataType);
                $("#required")[0].checked = fields[i].Required;
                if(fields[i].DataSource) $("#controlDataSource").val(fields[i].DataSource);
                $("#accesspattern").val(fields[i].AccessPattern);
                $("#controlWidth").val($("#"+controlID).width());
                $("#controlHeight").val($("#"+controlID).height());
            }
        }
    };
    var htmlAttr = '<div id="configure_tabs"><ul style="border-bottom: 0px;">' + '<li><a  href="#configure_data">����</a></li>' + '<li><a  href="#configure_show">��ʾ</a></li></ul>' + '<div id="configure_data"><div><div class="data_left">�ؼ�ID</div>' + '<input type="text" class="data_right" id="controlId" />' + '</div>' + '<div style="clear: both;">' + '<div class="data_left">�ؼ���</div>' + '<input type="text" class="data_right" id="controlName" />' + '</div>' + '<table style="clear: both">' + '<tr>' + '<td class="data_left">Ĭ��ֵ</td>' + ' <td>' + '<input type="text" id="controlValue" /></td>' + '<td class="data_left">����Դ</td>' + '<td>' + '<input type="text" id="controlDataSource" disabled="disabled" /><span id="configure">' + '</span></td>' + '</tr>' + '<tr>' + '<td class="data_left">��������</td>' + '<td>' + '<select id="datatype">' + '<option value="Integer" selected="selected">����</option>' + '<option value="Float">������</option>' + '<option value="DateTime">����</option>' + '<option value="String">�ַ���</option>' + '<option value="Boolean">������</option>' + '</select></td>' + '</tr>' + '</table>' + '<div style="clear: both;">' + '<div class="data_left">Լ��</div>' + '<input type="text" class="data_right" id="controlBind" />' + '</div>' + '<div style="clear: both;">' + '<div class="data_left">�Ƿ��Ϊ��</div>' + '<input type="checkbox" id="required" style="height: 25px; line-height: 25px;" />' + '</div>' + '</div>' + '<div id="configure_show" style="display: none">' + '<table>' + '<tr>' + '<td>��д״̬</td>' + '<td>' + '<select id="accesspattern">' + '<option value="Write">��д</option>' + '<option value="ReadOnly">ֻ��</option>' + '</select></td>' + '</tr>' + '<tr>' + '<td>���</td>' + '<td>' + '<input type="text" id="controlWidth" /></td>' + '</tr>' + '<tr>' + '<td>�߶�</td>' + '<td>' + '<input type="text" id="controlHeight" /></td>' + '</tr>' + '<tr style="display: none">' + '<td>����</td>' + '<td>' + '<input type="text" id="controlCol" value="1" /></td>' + '</tr>' + '<tr style="display: none">' + '<td>����</td>' + '<td>' + '<input type="text" id="controlRow" value="1" /></td>' + '</tr>' + '</table>' + '</div>' + '<div id="btnchoose">' + '<input type="button" id="save" value="ȷ��" />' + '<input type="button" id="cancel" value="ȡ��" />' + '</div>' + '</div>';
    var dialog = {
        dialogContent: {
            title: "���ô���",
            width:702,
            content: htmlAttr
        },
        dialogScript: initEvent
    };
    return dialog;
})());
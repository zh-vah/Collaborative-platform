import request from "./config";
import { API_PATH } from "./path";

/** AppLogin-登录 */
export const resAppLoginCheckLogin = data => request(API_PATH + "AppLogin/CheckLogin", data, "GET")

/** AppLogin-项目概况 */
export const resAppLoginGetProjectKml = data => request(API_PATH + "AppLogin/GetProjectKml", data, "GET")

/** AppLogin-从session项目ID */
export const resAppLoginGetSessionOfAppProjectId = data => request(API_PATH + "AppLogin/GetSessionOfAppProjectId", data, "GET")

/** AppLogin-从session项目名称 */
export const resAppLoginGetSessionOfAppProjectName = data => request(API_PATH + "AppLogin/GetSessionOfAppProjectName", data, "GET")

/** CommonApi-检查服务器 */
export const resCommonApiCheckService = data => request(API_PATH + "CommonApi/CheckService", data, "GET")

/** CommonApi-更新附件表的高清URL字段 */
export const resCommonApiUploadFiles = data => request(API_PATH + "CommonApi/UploadFiles", data, "POST")

/** DemolitionMapApi-获取拆迁管理数据 */
export const resDemolitionMapApiGetDemolitionList = data => request(API_PATH + "DemolitionMapApi/GetDemolitionList", data, "GET")

/** Kml-项目概况 */
export const resKmlGetProjectKml = data => request(API_PATH + "Kml/GetProjectKml", data, "GET")

/** Kml-从session项目ID */
export const resKmlGetSessionOfAppProjectId = data => request(API_PATH + "Kml/GetSessionOfAppProjectId", data, "GET")

/** Kml-从session项目名称 */
export const resKmlGetSessionOfAppProjectName = data => request(API_PATH + "Kml/GetSessionOfAppProjectName", data, "GET")

/** LoginApi-登录 */
export const resLoginApiCheckLogin = data => request(API_PATH + "LoginApi/CheckLogin", data, "GET")

/** Maillist-获取项目全部人员信息 */
export const resMaillistAppGetUserInfo = data => request(API_PATH + "Maillist/AppGetUserInfo", data, "GET")

/** Maillist-获取组织和岗位数据字典分类 */
export const resMaillistGetclassifiy = data => request(API_PATH + "Maillist/Getclassifiy", data, "GET")

/** Maillist-获取用户 */
export const resMaillistAppGetUser = data => request(API_PATH + "Maillist/AppGetUser", data, "GET")

/** Maillist-获取组织和岗位数据字典分类 */
export const resMaillistAppSaveUser = data => request(API_PATH + "Maillist/AppSaveUser", data, "POST")

/** Maillist-删除临时用户 */
export const resMaillistAppDeleteUser = data => request(API_PATH + "Maillist/AppDeleteUser", data, "POST")

/** Maillist-从session项目ID */
export const resMaillistGetSessionOfAppProjectId = data => request(API_PATH + "Maillist/GetSessionOfAppProjectId", data, "GET")

/** Maillist-从session项目名称 */
export const resMaillistGetSessionOfAppProjectName = data => request(API_PATH + "Maillist/GetSessionOfAppProjectName", data, "GET")

/** Message-检查服务器 */
export const resMessageCheckService = data => request(API_PATH + "Message/CheckService", data, "GET")

/** Message-自动登陆接口 */
export const resMessageAppAutoLogin = data => request(API_PATH + "Message/AppAutoLogin", data, "GET")

/** Message-从session项目ID */
export const resMessageGetSessionOfAppProjectId = data => request(API_PATH + "Message/GetSessionOfAppProjectId", data, "GET")

/** Message-从session项目名称 */
export const resMessageGetSessionOfAppProjectName = data => request(API_PATH + "Message/GetSessionOfAppProjectName", data, "GET")

/** ModelBrowseApi-获取图层 */
export const resModelBrowseApiGetGisLayerTree = data => request(API_PATH + "ModelBrowseApi/GetGisLayerTree", data, "GET")

/** ModelBrowseApi-获取漫游文件列表 */
export const resModelBrowseApiGetFpfFileList = data => request(API_PATH + "ModelBrowseApi/GetFpfFileList", data, "GET")

/** ModelBrowseApi-获取构件树 */
export const resModelBrowseApiGetInstance3DTreeData = data => request(API_PATH + "ModelBrowseApi/GetInstance3DTreeData", data, "GET")

/** ModelBrowseApi-获取沿线剖切 */
export const resModelBrowseApiGetCustomclipKml = data => request(API_PATH + "ModelBrowseApi/GetCustomclipKml", data, "GET")

/** ModelBrowseApi-获取沿线压平kml */
export const resModelBrowseApiGetmodelFlatteningKml = data => request(API_PATH + "ModelBrowseApi/GetmodelFlatteningKml", data, "GET")

/** ModelBrowseApi-undefined */
export const resModelBrowseApiGetDzGeologyColor = data => request(API_PATH + "ModelBrowseApi/GetDzGeologyColor", data, "GET")

/** ModelBrowseApi-undefined */
export const resModelBrowseApiGetLayersEntityBySupermapLayerId = data => request(API_PATH + "ModelBrowseApi/GetLayersEntityBySupermapLayerId", data, "GET")

/** ModelBrowseApi-根据项目ID和构件编号获取属性 */
export const resModelBrowseApiGetInstanceAttrs = data => request(API_PATH + "ModelBrowseApi/GetInstanceAttrs", data, "GET")

/** ModelBrowseApi-根据kml文件fordid获取文件路径及显示是在 */
export const resModelBrowseApiGetProjectKmlWidthFordid = data => request(API_PATH + "ModelBrowseApi/GetProjectKmlWidthFordid", data, "GET")

/** ModelBrowseApi-undefined */
export const resModelBrowseApiSaveUserCameraLayers = data => request(API_PATH + "ModelBrowseApi/SaveUserCameraLayers", data, "POST")

/** ModelBrowseApi-undefined */
export const resModelBrowseApiSaveReportPageCameraLayers = data => request(API_PATH + "ModelBrowseApi/SaveReportPageCameraLayers", data, "POST")

/** ModelSearchApi-获取交付模型列表 */
export const resModelSearchApiGetSubmitModelFileList = data => request(API_PATH + "ModelSearchApi/GetSubmitModelFileList", data, "GET")

/** ModelSearchApi-获取专业 */
export const resModelSearchApiGetMajorList = data => request(API_PATH + "ModelSearchApi/GetMajorList", data, "GET")

/** ModelSearchApi-构件分类 */
export const resModelSearchApiGetComponentTypeList = data => request(API_PATH + "ModelSearchApi/GetComponentTypeList", data, "GET")

/** ModelSearchApi-构件通用属性定义列表 */
export const resModelSearchApiGetAttrTypeList = data => request(API_PATH + "ModelSearchApi/GetAttrTypeList", data, "GET")

/** ModelSearchApi-根据属性条件查询 */
export const resModelSearchApiGetAttrDatas = data => request(API_PATH + "ModelSearchApi/GetAttrDatas", data, "GET")

/** Notice-undefined */
export const resNoticeSearch = data => request(API_PATH + "Notice/Search", data, "GET")

/** Notice-保存通知公告 */
export const resNoticeSaveEntity = data => request(API_PATH + "Notice/SaveEntity", data, "POST")

/** Notice-保存通知公告浏览记录 */
export const resNoticeSaveNoticeReadEntity = data => request(API_PATH + "Notice/SaveNoticeReadEntity", data, "POST")

/** Notice-获取通知公告列表数据 */
export const resNoticeGetNoticeInfoList = data => request(API_PATH + "Notice/GetNoticeInfoList", data, "GET")

/** Notice-获取数据 */
export const resNoticeGetNoticeData = data => request(API_PATH + "Notice/GetNoticeData", data, "GET")

/** Notice-从session项目ID */
export const resNoticeGetSessionOfAppProjectId = data => request(API_PATH + "Notice/GetSessionOfAppProjectId", data, "GET")

/** Notice-从session项目名称 */
export const resNoticeGetSessionOfAppProjectName = data => request(API_PATH + "Notice/GetSessionOfAppProjectName", data, "GET")

/** PersonCenter-旧密码验证 */
export const resPersonCenterValidationOldPassword = data => request(API_PATH + "PersonCenter/ValidationOldPassword", data, "GET")

/** PersonCenter-获取全部用户 */
export const resPersonCenterAppGetUser = data => request(API_PATH + "PersonCenter/AppGetUser", data, "GET")

/** PersonCenter-undefined */
export const resPersonCenterUpdateUserPwd = data => request(API_PATH + "PersonCenter/UpdateUserPwd", data, "GET")

/** PersonCenter-保存用户表数据 */
export const resPersonCenterLoginout = data => request(API_PATH + "PersonCenter/Loginout", data, "POST")

/** PersonCenter-保存用户表数据 */
export const resPersonCenterAppUpdateUser = data => request(API_PATH + "PersonCenter/AppUpdateUser", data, "POST")

/** PersonCenter-从session项目ID */
export const resPersonCenterGetSessionOfAppProjectId = data => request(API_PATH + "PersonCenter/GetSessionOfAppProjectId", data, "GET")

/** PersonCenter-从session项目名称 */
export const resPersonCenterGetSessionOfAppProjectName = data => request(API_PATH + "PersonCenter/GetSessionOfAppProjectName", data, "GET")

/** PersonSelect-获取项目组织人员 */
export const resPersonSelectGetProjectUsersid = id => request(API_PATH + "PersonSelect/GetProjectUsers/" + id, null, "GET")

/** PersonSelect-从session项目ID */
export const resPersonSelectGetSessionOfAppProjectId = data => request(API_PATH + "PersonSelect/GetSessionOfAppProjectId", data, "GET")

/** PersonSelect-从session项目名称 */
export const resPersonSelectGetSessionOfAppProjectName = data => request(API_PATH + "PersonSelect/GetSessionOfAppProjectName", data, "GET")

/** Project-undefined */
export const resProjectData = data => request(API_PATH + "Project/Data", data, "GET")

/** Project-项目概况 */
export const resProjectGetProjectInfo = data => request(API_PATH + "Project/GetProjectInfo", data, "GET")

/** Project-将项目id存到session */
export const resProjectWriteSessionProjectId = data => request(API_PATH + "Project/WriteSessionProjectId", data, "GET")

/** Project-获取项目名称 */
export const resProjectGetProjectName = data => request(API_PATH + "Project/GetProjectName", data, "GET")

/** Project-更新人员关联表完成状态 */
export const resProjectUpdateIscomplete = data => request(API_PATH + "Project/UpdateIscomplete", data, "POST")

/** Project-项目概况 */
export const resProjectGetProjectKml = data => request(API_PATH + "Project/GetProjectKml", data, "GET")

/** Project-从session项目ID */
export const resProjectGetSessionOfAppProjectId = data => request(API_PATH + "Project/GetSessionOfAppProjectId", data, "GET")

/** Project-从session项目名称 */
export const resProjectGetSessionOfAppProjectName = data => request(API_PATH + "Project/GetSessionOfAppProjectName", data, "GET")

/** ProjectProcess-项目过程检索 */
export const resProjectProcessSearch = data => request(API_PATH + "ProjectProcess/Search", data, "GET")

/** ProjectProcess-项目过程详情 前期资料和会议管理 */
export const resProjectProcessGetDetailData = data => request(API_PATH + "ProjectProcess/GetDetailData", data, "GET")

/** ProjectProcess-项目过程详情数据 */
export const resProjectProcessGetDetailDataForMap = data => request(API_PATH + "ProjectProcess/GetDetailDataForMap", data, "GET")

/** ProjectProcess-获取数据 */
export const resProjectProcessGetProjectProcessList = data => request(API_PATH + "ProjectProcess/GetProjectProcessList", data, "GET")

/** ProjectProcess-保存项目过程数据 */
export const resProjectProcessSaveEntity = data => request(API_PATH + "ProjectProcess/SaveEntity", data, "POST")

/** ProjectProcess-保存项目过程明细数据 */
export const resProjectProcessSaveProjectProcessDetailEntity = data => request(API_PATH + "ProjectProcess/SaveProjectProcessDetailEntity", data, "POST")

/** ProjectProcess- */
export const resProjectProcessDeleteProjectProcessData = data => request(API_PATH + "ProjectProcess/DeleteProjectProcessData", data, "GET")

/** ProjectProcess-项目过程数据 */
export const resProjectProcessGetProjectProcessInfo = data => request(API_PATH + "ProjectProcess/GetProjectProcessInfo", data, "GET")

/** ProjectProcess-获取项目过程分类 */
export const resProjectProcessGetProjectProcessTypeList = data => request(API_PATH + "ProjectProcess/GetProjectProcessTypeList", data, "GET")

/** ProjectProcess-打印踏勘报告 */
export const resProjectProcessExportWord = data => request(API_PATH + "ProjectProcess/ExportWord", data, "GET")

/** ProjectProcess-删除踏勘报告 */
export const resProjectProcessDeletePdf = data => request(API_PATH + "ProjectProcess/DeletePdf", data, "GET")

/** ProjectProcess-获取字典名称 */
export const resProjectProcessGetCodeName = data => request(API_PATH + "ProjectProcess/GetCodeName", data, "GET")

/** ProjectProcess-从session项目ID */
export const resProjectProcessGetSessionOfAppProjectId = data => request(API_PATH + "ProjectProcess/GetSessionOfAppProjectId", data, "GET")

/** ProjectProcess-从session项目名称 */
export const resProjectProcessGetSessionOfAppProjectName = data => request(API_PATH + "ProjectProcess/GetSessionOfAppProjectName", data, "GET")

/** ProjectProcessApi-获取踏勘资料左侧树形数据(带明细) */
export const resProjectProcessApiGetAllProjectProcess = data => request(API_PATH + "ProjectProcessApi/GetAllProjectProcess", data, "GET")

/** ProjectProcessApi-undefined */
export const resProjectProcessApiGetProjectProcessDetail = data => request(API_PATH + "ProjectProcessApi/GetProjectProcessDetail", data, "GET")

/** ProjectProcessApi-项目过程详情数据 */
export const resProjectProcessApiGetDetailDataForMap = data => request(API_PATH + "ProjectProcessApi/GetDetailDataForMap", data, "GET")

/** ProjectProcessDetail-undefined */
export const resProjectProcessDetailGetList = data => request(API_PATH + "ProjectProcessDetail/GetList", data, "GET")

/** ProjectProcessDetail-undefined */
export const resProjectProcessDetailGetInfoList = data => request(API_PATH + "ProjectProcessDetail/GetInfoList", data, "GET")

/** ProjectProcessDetail-undefined */
export const resProjectProcessDetailGetEntity = data => request(API_PATH + "ProjectProcessDetail/GetEntity", data, "GET")

/** ProjectProcessDetail-undefined */
export const resProjectProcessDetailGetFormData = data => request(API_PATH + "ProjectProcessDetail/GetFormData", data, "GET")

/** ProjectProcessDetail-undefined */
export const resProjectProcessDetailSearch = data => request(API_PATH + "ProjectProcessDetail/Search", data, "GET")

/** ProjectProcessDetail-undefined */
export const resProjectProcessDetailDeleteProjectProcessDetailData = data => request(API_PATH + "ProjectProcessDetail/DeleteProjectProcessDetailData", data, "GET")

/** ProjectProcessDetail-undefined */
export const resProjectProcessDetailSaveEntity = data => request(API_PATH + "ProjectProcessDetail/SaveEntity", data, "POST")

/** ProjectProcessDetail-从session项目ID */
export const resProjectProcessDetailGetSessionOfAppProjectId = data => request(API_PATH + "ProjectProcessDetail/GetSessionOfAppProjectId", data, "GET")

/** ProjectProcessDetail-从session项目名称 */
export const resProjectProcessDetailGetSessionOfAppProjectName = data => request(API_PATH + "ProjectProcessDetail/GetSessionOfAppProjectName", data, "GET")

/** ProjectSelect-undefined */
export const resProjectSelectSearch = data => request(API_PATH + "ProjectSelect/Search", data, "GET")

/** ProjectSelect-undefined */
export const resProjectSelectTop = data => request(API_PATH + "ProjectSelect/Top", data, "POST")

/** ProjectSelect-从session项目ID */
export const resProjectSelectGetSessionOfAppProjectId = data => request(API_PATH + "ProjectSelect/GetSessionOfAppProjectId", data, "GET")

/** ProjectSelect-从session项目名称 */
export const resProjectSelectGetSessionOfAppProjectName = data => request(API_PATH + "ProjectSelect/GetSessionOfAppProjectName", data, "GET")

/** ScheduleManagementApi-undefined */
export const resScheduleManagementApiGetModelTimeNotNull = data => request(API_PATH + "ScheduleManagementApi/GetModelTimeNotNull", data, "GET")

/** ScheduleManagementApi-递归找出父节点计划时间不为空 */
export const resScheduleManagementApiGetParentNode = data => request(API_PATH + "ScheduleManagementApi/GetParentNode", data, "GET")

/** statistics-获取项目统计数据 */
export const resStatisticsProjectStatistics = data => request(API_PATH + "statistics/ProjectStatistics", data, "GET")

/** statistics-从session项目ID */
export const resStatisticsGetSessionOfAppProjectId = data => request(API_PATH + "statistics/GetSessionOfAppProjectId", data, "GET")

/** statistics-从session项目名称 */
export const resStatisticsGetSessionOfAppProjectName = data => request(API_PATH + "statistics/GetSessionOfAppProjectName", data, "GET")

/** Swagger-undefined */
export const resSwaggerGet = data => request(API_PATH + "Swagger/Get", data, "GET")

/** TemporaryTask-获取临时任务数据 */
export const resTemporaryTaskData = data => request(API_PATH + "TemporaryTask/Data", data, "GET")

/** TemporaryTask-undefined */
export const resTemporaryTaskGetAttInfoByDate = data => request(API_PATH + "TemporaryTask/GetAttInfoByDate", data, "GET")

/** TemporaryTask-undefined */
export const resTemporaryTaskGetIsDataByMouths = data => request(API_PATH + "TemporaryTask/GetIsDataByMouths", data, "GET")

/** TemporaryTask-获取临时任务数据详细 */
export const resTemporaryTaskDataDetailid = id => request(API_PATH + "TemporaryTask/DataDetail/" + id, null, "GET")

/** TemporaryTask-获取临时任务数据 */
export const resTemporaryTaskAdd = data => request(API_PATH + "TemporaryTask/Add", data, "POST")

/** TemporaryTask-从session项目ID */
export const resTemporaryTaskGetSessionOfAppProjectId = data => request(API_PATH + "TemporaryTask/GetSessionOfAppProjectId", data, "GET")

/** TemporaryTask-从session项目名称 */
export const resTemporaryTaskGetSessionOfAppProjectName = data => request(API_PATH + "TemporaryTask/GetSessionOfAppProjectName", data, "GET")

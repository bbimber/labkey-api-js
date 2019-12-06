
## 0.0.25 - 2019-11-12
- Added `includeMetadata` flag to selectRows (#24)

## 0.0.24 - 2019-10-28
- Export `getFiltersFromParameters` (#22)
- Add `Query.truncateTable`

## 0.0.23 - 2019-10-23
- Migrate core/Experiment.js (#21)

## 0.0.22 - 2019-10-12
- Update deployment docs (#20)

## 0.0.20 - 2019-08-15
- Item 6033: add `saveDataAsFile` option to AssayDOM importRun (#19)

## 0.0.19 - 2019-08-15
- Story 6033: Fixes for assay reimport and includeTotalCount (#18)

## 0.0.18 - 2019-08-15
- Item 5718: add `queryDetailColumns` property to Utils.getQueries (#16)

## 0.0.17 - 2019-06-12
- Item 5761: add missing `insertOption` prop to IImportDataOptions (#15)

## 0.0.16 - 2019-04-10
- Add parameters to Domain success and failure callbacks (#14)

## 0.0.15 - 2019-04-08
- Edit standard settings name/label/type (#12)

## 0.0.14 - 2019-04-08
- Core updates through r63014 (#13)
- 37116: Multi-value foreign key filter broken in customize view

## 0.0.12 - 2019-03-13
- assay-importRun.api: name and comment are optional (#10)

## 0.0.10 - 2019-03-13
- Core updates through r61908
- Core updates through r61088
- Add AssayDesign
- Core updates through r60653
- 35265: Create alternate syntax for handling delimiters
- rename interfaces `Filter` to `IFilter`
- Core updates through r60120
- Package updates
- Initial documentation (#4)

## 0.0.9 - 2018-04-29
- Add importUrl option to Query.importData() (#3)
- Initial documentation for experimental build

## 0.0.7 - 2018-07-06
- 34761: Add saveToPipeline parameter to Query.js
- Add DOM.Utils package
- Core updates through 18.1

## 0.0.6 - 2018-06-06
- Expose DOM packages via own namespace

## 0.0.5 - 2018-06-05
- ActionURL.getController()

## 0.0.4 - 2018-06-05
- package updates
- Security: update GetUsersOptions interface

## 0.0.3 - 2018-05-22
- Add support for `Q` filter

## 0.0.2 - 2018-05-21
- Update Domain interfaces
- Package updates
- Update tests for latest jest
- Introduce rollup for ES, CJS distributions
- Rename package to @labkey/api
- Remove babel
- Updates through 17.3
- Add Query importData, insert, update, delete APIs
- Add Utils.getDataViews
- Add Assay APIs
- Add DOM APIs and build as separate distribution
- Add Query APIs
- Add Visualization APIs
- Add Specimen APIs
- Add Report APIs
- Add List, MultiRequest APIs
- Add Query.getQueryDetails, getSchemas
- Add ActionURL, Utils
- Add GetData, ParticipantGroup
- Add Pipeline
- Add Messages
- Introduce Jest tests
- Add Security
- Add Domain, Query.executeSql, Query.selectDistinctRows
- Add Query Filter and FilterTypes
- Add Query FieldKey, SchemaKey
- Add Query selectRows

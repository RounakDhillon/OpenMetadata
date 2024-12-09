/*
 *  Copyright 2024 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


 /**
 * OpenMetadata Ingestion Framework definition.
 */
export interface Workflow {
    /**
     * Unique identifier that identifies this pipeline.
     */
    id?: string;
    /**
     * Name that identifies this pipeline instance uniquely.
     */
    name: string;
    /**
     * OpenMetadata Ingestion Workflow Config.
     */
    openMetadataWorkflowConfig: OpenMetadataWorkflowConfig;
}

/**
 * OpenMetadata Ingestion Workflow Config.
 */
export interface OpenMetadataWorkflowConfig {
    bulkSink?: BulkSink;
    /**
     * Fully qualified name of ingestion pipeline, used to identify the current ingestion
     * pipeline
     */
    ingestionPipelineFQN?: string;
    /**
     * Unique identifier of pipeline run, used to identify the current pipeline run
     */
    pipelineRunId?: string;
    processor?:     Processor;
    sink?:          Sink;
    source:         Source;
    stage?:         Stage;
    workflowConfig: WorkflowConfig;
}

/**
 * Configuration for BulkSink Component in the OpenMetadata Ingestion Framework.
 */
export interface BulkSink {
    config?: { [key: string]: any };
    /**
     * Type of BulkSink component ex: metadata-usage
     */
    type: string;
}

/**
 * Configuration for Processor Component in the OpenMetadata Ingestion Framework.
 */
export interface Processor {
    config?: { [key: string]: any };
    /**
     * Type of processor component ex: pii-processor
     */
    type: string;
}

/**
 * Configuration for Sink Component in the OpenMetadata Ingestion Framework.
 */
export interface Sink {
    config?: { [key: string]: any };
    /**
     * Type of sink component ex: metadata
     */
    type: string;
}

/**
 * Configuration for Source component in OpenMetadata Ingestion Framework.
 */
export interface Source {
    /**
     * Connection configuration for the source. ex: mysql , tableau connection.
     */
    serviceConnection?: ServiceConnection;
    /**
     * Type of the source connector ex: mysql, snowflake, tableau etc..
     */
    serviceName?: string;
    sourceConfig: SourceConfig;
    /**
     * Type of the source connector ex: mysql, snowflake, tableau etc..
     */
    type: string;
}

/**
 * Connection configuration for the source. ex: mysql , tableau connection.
 *
 * Supported services
 *
 * API Service Connection.
 *
 * Dashboard Connection.
 *
 * Database Connection.
 *
 * Metadata Service Connection.
 *
 * Pipeline Connection.
 *
 * MlModel Connection.
 *
 * Storage Connection.
 *
 * search Connection.
 */
export interface ServiceConnection {
    config?: ConfigClass;
}

/**
 * REST Connection Config
 *
 * Looker Connection Config
 *
 * Metabase Connection Config
 *
 * PowerBI Connection Config
 *
 * PowerBIReportServer Connection Config
 *
 * Redash Connection Config
 *
 * Superset Connection Config
 *
 * Tableau Connection Config
 *
 * Mode Connection Config
 *
 * Custom Dashboard Service connection to build a source that is not supported by
 * OpenMetadata yet.
 *
 * Domo Dashboard Connection Config
 *
 * QuickSight Connection Config
 *
 * Qlik Sense Connection Config
 *
 * Lightdash Connection Config
 *
 * MicroStrategy Connection Config
 *
 * Qlik Cloud Connection Config
 *
 * Sigma Connection Config
 *
 * Google BigQuery Connection Config
 *
 * Google BigTable Connection Config
 *
 * AWS Athena Connection Config
 *
 * Azure SQL Connection Config
 *
 * Clickhouse Connection Config
 *
 * Databricks Connection Config
 *
 * Db2 Connection Config
 *
 * DeltaLake Database Connection Config
 *
 * Druid Connection Config
 *
 * DynamoDB Connection Config
 *
 * Glue Connection Config
 *
 * Hive SQL Connection Config
 *
 * Impala SQL Connection Config
 *
 * MariaDB Database Connection Config
 *
 * Mssql Database Connection Config
 *
 * Mysql Database Connection Config
 *
 * SQLite Database Connection Config
 *
 * Oracle Database Connection Config
 *
 * Postgres Database Connection Config
 *
 * Presto Database Connection Config
 *
 * Redshift  Connection Config
 *
 * Salesforce Connection Config
 *
 * SingleStore Database Connection Config
 *
 * Snowflake Connection Config
 *
 * Trino Connection Config
 *
 * Vertica Connection Config
 *
 * PinotDB Database Connection Config
 *
 * Datalake Connection Config
 *
 * Domo Database Connection Config
 *
 * Custom Database Service connection to build a source that is not supported by
 * OpenMetadata yet.
 *
 * Sap Hana Database Connection Config
 *
 * MongoDB Connection Config
 *
 * Couchbase Connection Config
 *
 * Greenplum Database Connection Config
 *
 * Doris Database Connection Config
 *
 * UnityCatalog Connection Config
 *
 * SAS Connection Config
 *
 * Iceberg Catalog Connection Config
 *
 * Teradata Database Connection Config
 *
 * Sap ERP Database Connection Config
 *
 * Synapse Database Connection Config
 *
 * Exasol Database Connection Config
 *
 * Kafka Connection Config
 *
 * Redpanda Connection Config
 *
 * Kinesis Connection Config
 *
 * Custom Messaging Service Connection to build a source that is not supported by
 * OpenMetadata yet.
 *
 * Amundsen Connection Config
 *
 * Metadata to ElasticSearch Connection Config
 *
 * OpenMetadata Connection Config
 *
 * Atlas Connection Config
 *
 * Alation Connection Config
 *
 * Alation Sink Connection Config
 *
 * Airflow Metadata Database Connection Config
 *
 * Glue Pipeline Connection Config
 *
 * Airbyte Metadata Database Connection Config
 *
 * Fivetran Metadata Database Connection Config
 *
 * Flink Metadata Connection Config
 *
 * Dagster Metadata Database Connection Config
 *
 * Nifi Metadata Pipeline Connection Config
 *
 * Domo Pipeline Connection Config
 *
 * Custom Pipeline Service connection to build a source that is not supported by
 * OpenMetadata yet.
 *
 * Spline Metadata Database Connection Config
 *
 * Spark Metadata Pipeline Connection Config
 *
 * OpenLineage Connection Config
 *
 * KafkaConnect Connection Config
 *
 * DBTCloud Connection Config
 *
 * Matillion Connection
 *
 * Azure Data Factory Connection Config
 *
 * Stitch Connection
 *
 * MlFlow Connection Config
 *
 * Sklearn Connection Config
 *
 * Custom MlModel Service connection to build a source that is not supported by OpenMetadata
 * yet.
 *
 * SageMaker Connection Config
 *
 * Google VertexAI Connection Config
 *
 * S3 Connection.
 *
 * ADLS Connection.
 *
 * GCS Connection.
 *
 * Custom Storage Service connection to build a source that is not supported by OpenMetadata
 * yet.
 *
 * ElasticSearch Connection.
 *
 * OpenSearch Connection.
 *
 * Custom Search Service connection to build a source that is not supported by OpenMetadata
 * yet.
 */
export interface ConfigClass {
    /**
     * Open API Schema URL.
     */
    openAPISchemaURL?: string;
    /**
     * Supports Metadata Extraction.
     */
    supportsMetadataExtraction?: boolean;
    /**
     * Generated Token to connect to OpenAPI Schema.
     *
     * token to connect to Qlik Cloud.
     *
     * Generated Token to connect to Databricks.
     *
     * To Connect to Dagster Cloud
     *
     * Generated Token to connect to DBTCloud.
     *
     * Token to connect to Stitch api doc
     */
    token?: string;
    /**
     * REST API Type
     *
     * Service Type
     *
     * Custom dashboard service type
     *
     * Custom database service type
     *
     * Custom messaging service type
     *
     * Custom pipeline service type
     *
     * Custom Ml model service type
     *
     * Custom storage service type
     *
     * ElasticSearch Type
     *
     * Custom search service type
     */
    type?: RESTType;
    /**
     * User's Client ID. This user should have privileges to read all the metadata in Looker.
     *
     * client_id for PowerBI.
     *
     * Client ID for DOMO
     *
     * client_id for Sigma.
     */
    clientId?: string;
    /**
     * User's Client Secret.
     *
     * clientSecret for PowerBI.
     *
     * clientSecret for Sigma.
     */
    clientSecret?: string;
    /**
     * Credentials to extract the .lkml files from a repository. This is required to get all the
     * lineage and definitions.
     */
    gitCredentials?: GitHubCredentials;
    /**
     * URL to the Looker instance.
     *
     * Host and Port of the Metabase instance.
     *
     * Dashboard URL for PowerBI service.
     *
     * Dashboard URL for PowerBI Report Server.
     *
     * URL for the Redash instance
     *
     * URL for the superset instance.
     *
     * Tableau Server.
     *
     * URL for the mode instance.
     *
     * URL for the Qlik instance.
     *
     * Address for your running Lightdash instance
     *
     * Host and Port of the MicroStrategy instance.
     *
     * Host and Port of the Qlik Cloud instance.
     *
     * Sigma API url.
     *
     * BigQuery APIs URL.
     *
     * Host and port of the AzureSQL service.
     *
     * Host and port of the Clickhouse service.
     *
     * Host and port of the Databricks service.
     *
     * Host and port of the DB2 service.
     *
     * Host and port of the Druid service.
     *
     * Host and port of the Hive service.
     *
     * Host and port of the Impala service.
     *
     * Host and port of the MariaDB service.
     *
     * Host and port of the MSSQL service.
     *
     * Host and port of the MySQL service.
     *
     * Host and port of the SQLite service. Blank for in-memory database.
     *
     * Host and port of the Oracle service.
     *
     * Host and port of the source service.
     *
     * Host and port of the Presto service.
     *
     * Host and port of the Redshift service.
     *
     * Host and port of the SingleStore service.
     *
     * Host and port of the Trino service.
     *
     * Host and port of the Vertica service.
     *
     * Host and port of the PinotDB Broker service.
     *
     * Host and port of the MongoDB service when using the `mongodb` connection scheme. Only
     * host when using the `mongodb+srv` scheme.
     *
     * Host and port of the Doris service.
     *
     * Host and port of the Teradata service.
     *
     * Host and Port of the SAP ERP instance.
     *
     * Host and port of the Azure Synapse service.
     *
     * Host and port of the Amundsen Neo4j Connection. This expect a URI format like:
     * bolt://localhost:7687.
     *
     * OpenMetadata Server Config. Must include API end point ex: http://localhost:8585/api
     *
     * Host and port of the Atlas service.
     *
     * Host and port of the Alation service.
     *
     * Pipeline Service Management/UI URI.
     *
     * Pipeline Service Management/UI URL.
     *
     * Spline REST Server Host & Port.
     *
     * KafkaConnect Service Management/UI URI.
     *
     * Host and port of the Stitch API host
     *
     * Host and port of the ElasticSearch service.
     *
     * Host and port of the OpenSearch service.
     */
    hostPort?: string;
    /**
     * Password to connect to Metabase.
     *
     * Password to connect to PowerBI report server.
     *
     * Password to connect to MicroStrategy.
     *
     * Password to connect to AzureSQL.
     *
     * Password to connect to Clickhouse.
     *
     * Password to connect to DB2.
     *
     * Password to connect to Druid.
     *
     * Password to connect to Hive.
     *
     * Password to connect to Impala.
     *
     * Password to connect to MariaDB.
     *
     * Password to connect to MSSQL.
     *
     * Password to connect to SQLite. Blank for in-memory database.
     *
     * Password to connect to Oracle.
     *
     * Password to connect to Presto.
     *
     * Password to connect to Redshift.
     *
     * Password to connect to the Salesforce.
     *
     * Password to connect to SingleStore.
     *
     * Password to connect to Snowflake.
     *
     * Password to connect to Vertica.
     *
     * password to connect to the PinotDB.
     *
     * Password to connect to MongoDB.
     *
     * Password to connect to Couchbase.
     *
     * Password to connect to Doris.
     *
     * Password to connect to SAS Viya
     *
     * Password to connect to Teradata.
     *
     * Password to connect to Azure Synapse.
     *
     * Password to connect to Exasol.
     *
     * password to connect to the Amundsen Neo4j Connection.
     *
     * password to connect  to the Atlas.
     *
     * Password to connect to Airbyte.
     *
     * OpenSearch Password for Login
     */
    password?: string;
    /**
     * Username to connect to Metabase. This user should have privileges to read all the
     * metadata in Metabase.
     *
     * Username to connect to PowerBI report server.
     *
     * Username for Redash
     *
     * Username to connect to MicroStrategy. This user should have privileges to read all the
     * metadata in MicroStrategy.
     *
     * Username to connect to AzureSQL. This user should have privileges to read the metadata.
     *
     * Username to connect to Clickhouse. This user should have privileges to read all the
     * metadata in Clickhouse.
     *
     * Username to connect to DB2. This user should have privileges to read all the metadata in
     * DB2.
     *
     * Username to connect to Druid. This user should have privileges to read all the metadata
     * in Druid.
     *
     * Username to connect to Hive. This user should have privileges to read all the metadata in
     * Hive.
     *
     * Username to connect to Impala. This user should have privileges to read all the metadata
     * in Impala.
     *
     * Username to connect to MariaDB. This user should have privileges to read all the metadata
     * in MariaDB.
     *
     * Username to connect to MSSQL. This user should have privileges to read all the metadata
     * in MsSQL.
     *
     * Username to connect to MySQL. This user should have privileges to read all the metadata
     * in Mysql.
     *
     * Username to connect to SQLite. Blank for in-memory database.
     *
     * Username to connect to Oracle. This user should have privileges to read all the metadata
     * in Oracle.
     *
     * Username to connect to Postgres. This user should have privileges to read all the
     * metadata in Postgres.
     *
     * Username to connect to Presto. This user should have privileges to read all the metadata
     * in Postgres.
     *
     * Username to connect to Redshift. This user should have privileges to read all the
     * metadata in Redshift.
     *
     * Username to connect to the Salesforce. This user should have privileges to read all the
     * metadata in Redshift.
     *
     * Username to connect to SingleStore. This user should have privileges to read all the
     * metadata in MySQL.
     *
     * Username to connect to Snowflake. This user should have privileges to read all the
     * metadata in Snowflake.
     *
     * Username to connect to Trino. This user should have privileges to read all the metadata
     * in Trino.
     *
     * Username to connect to Vertica. This user should have privileges to read all the metadata
     * in Vertica.
     *
     * username to connect to the PinotDB. This user should have privileges to read all the
     * metadata in PinotDB.
     *
     * Username to connect to MongoDB. This user should have privileges to read all the metadata
     * in MongoDB.
     *
     * Username to connect to Couchbase. This user should have privileges to read all the
     * metadata in Couchbase.
     *
     * Username to connect to Greenplum. This user should have privileges to read all the
     * metadata in Greenplum.
     *
     * Username to connect to Doris. This user should have privileges to read all the metadata
     * in Doris.
     *
     * Username to connect to SAS Viya.
     *
     * Username to connect to Teradata. This user should have privileges to read all the
     * metadata in Teradata.
     *
     * Username to connect to Azure Synapse. This user should have privileges to read all the
     * metadata in Azure Synapse.
     *
     * Username to connect to Exasol. This user should have privileges to read all the metadata
     * in Exasol.
     *
     * username to connect to the Amundsen Neo4j Connection.
     *
     * username to connect  to the Atlas. This user should have privileges to read all the
     * metadata in Atlas.
     *
     * Username to connect to Airbyte.
     *
     * OpenSearch Username for Login
     */
    username?: string;
    /**
     * Authority URI for the PowerBI service.
     */
    authorityURI?: string;
    /**
     * Entity Limit set here will be used to paginate the PowerBi APIs
     */
    pagination_entity_per_page?: number;
    /**
     * Source to get the .pbit files to extract lineage information
     */
    pbitFilesSource?: PowerBIPbitFilesSource;
    /**
     * PowerBI secrets.
     */
    scope?: string[];
    /**
     * Tenant ID for PowerBI.
     */
    tenantId?: string;
    /**
     * Fetch the PowerBI metadata using admin APIs
     */
    useAdminApis?: boolean;
    /**
     * Web Portal Virtual Directory Name.
     */
    webPortalVirtualDirectory?: string;
    /**
     * API key of the redash instance to access.
     *
     * The personal access token you can generate in the Lightdash app under the user settings
     *
     * API key to authenticate with the SAP ERP APIs.
     *
     * Fivetran API Secret.
     */
    apiKey?: string;
    /**
     * Version of the Redash instance
     */
    redashVersion?: string;
    /**
     * Choose between API or database connection fetch metadata from superset.
     *
     * Choose between Database connection or HDB User Store connection.
     *
     * Choose between mysql and postgres connection for alation database
     *
     * Underlying database connection. See
     * https://airflow.apache.org/docs/apache-airflow/stable/howto/set-up-database.html for
     * supported backends.
     *
     * Matillion Auth Configuration
     */
    connection?: ConnectionObject;
    /**
     * Tableau API version.
     *
     * Sigma API version.
     *
     * OpenMetadata server API version to use.
     */
    apiVersion?: string;
    /**
     * Types of methods used to authenticate to the tableau instance
     *
     * Choose Auth Config Type.
     *
     * Types of methods used to authenticate to the alation instance
     */
    authType?: AuthenticationTypeForTableau | NoConfigAuthenticationTypes;
    /**
     * Tableau Environment Name.
     */
    env?: string;
    /**
     * Pagination limit used while querying the tableau metadata API for getting data sources
     *
     * Pagination limit used while querying the SAP ERP API for fetching the entities
     *
     * Pagination limit used for Alation APIs pagination
     */
    paginationLimit?: number;
    /**
     * Tableau Site Name.
     */
    siteName?: string;
    /**
     * Tableau Site Url.
     */
    siteUrl?: string;
    /**
     * SSL Configuration details.
     *
     * SSL Configuration for OpenMetadata Server
     */
    sslConfig?: SSLConfigObject;
    /**
     * Flag to verify SSL Certificate for OpenMetadata Server.
     *
     * Boolean marking if we need to verify the SSL certs for KafkaConnect REST API. True by
     * default.
     */
    verifySSL?: boolean | VerifySSL;
    /**
     * Access Token for Mode Dashboard
     *
     * Access token to connect to DOMO
     */
    accessToken?: string;
    /**
     * Access Token Password for Mode Dashboard
     */
    accessTokenPassword?: string;
    /**
     * Filter query parameter for some of the Mode API calls
     */
    filterQueryParam?: string;
    /**
     * Mode Workspace Name
     */
    workspaceName?:     string;
    connectionOptions?: { [key: string]: string };
    /**
     * Source Python Class Name to instantiated by the ingestion workflow
     */
    sourcePythonClass?: string;
    /**
     * API Host to connect to DOMO instance
     */
    apiHost?: string;
    /**
     * URL of your Domo instance, e.g., https://openmetadata.domo.com
     */
    instanceDomain?: string;
    /**
     * Secret Token to connect DOMO
     *
     * Secret token to connect to DOMO
     */
    secretToken?: string;
    /**
     * AWS Account ID
     */
    awsAccountId?: string;
    awsConfig?:    AWSCredentials;
    /**
     * The authentication method that the user uses to sign in.
     */
    identityType?: IdentityType;
    /**
     * The Amazon QuickSight namespace that contains the dashboard IDs in this request ( To be
     * provided when identityType is `ANONYMOUS` )
     */
    namespace?:    string;
    certificates?: QlikCertificatesBy;
    /**
     * Qlik Sense Base URL, used for genrating dashboard & chat url
     */
    displayUrl?: string;
    /**
     * User Directory.
     */
    userDirectory?: string;
    /**
     * User ID.
     */
    userId?: string;
    /**
     * Validate Host Name
     */
    validateHostName?: boolean;
    /**
     * The Project UUID for your Lightdash instance
     */
    projectUUID?: string;
    /**
     * Use if your Lightdash instance is behind a proxy like (Cloud IAP)
     */
    proxyAuthentication?: string;
    /**
     * The Space UUID for your Lightdash instance
     */
    spaceUUID?: string;
    /**
     * Login Mode for Microstrategy's REST API connection. You can authenticate with one of the
     * following authentication modes: `Standard (1)`, `Anonymous (8)`. Default will be
     * `Standard (1)`. If you're using demo account for Microstrategy, it will be needed to
     * authenticate through loginMode `8`.
     */
    loginMode?: string;
    /**
     * MicroStrategy Project Name
     *
     * Project name to create the refreshToken. Can be anything
     */
    projectName?: string;
    /**
     * If using Metastore, Key-Value pairs that will be used to add configs to the SparkSession.
     */
    connectionArguments?: { [key: string]: any };
    /**
     * GCP Credentials
     *
     * Azure Credentials
     */
    credentials?:             GCPCredentials;
    sampleDataStorageConfig?: SampleDataStorageConfig;
    /**
     * SQLAlchemy driver scheme options.
     *
     * Mongo connection scheme options.
     *
     * Couchbase driver scheme options.
     *
     * Http/Https connection scheme
     */
    scheme?:                string;
    supportsDatabase?:      boolean;
    supportsDataDiff?:      boolean;
    supportsDBTExtraction?: boolean;
    /**
     * Supports Lineage Extraction.
     */
    supportsLineageExtraction?: boolean;
    supportsProfiler?:          boolean;
    supportsQueryComment?:      boolean;
    supportsSystemProfile?:     boolean;
    /**
     * Supports Usage Extraction.
     */
    supportsUsageExtraction?: boolean;
    /**
     * Taxonomy location used to fetch policy tags
     */
    taxonomyLocation?: string;
    /**
     * Project IDs used to fetch policy tags
     */
    taxonomyProjectID?: string[];
    /**
     * Location used to query INFORMATION_SCHEMA.JOBS_BY_PROJECT to fetch usage data. You can
     * pass multi-regions, such as `us` or `eu`, or you specific region. Australia and Asia
     * multi-regions are not yet in GA.
     */
    usageLocation?: string;
    /**
     * Optional name to give to the database in OpenMetadata. If left blank, we will use default
     * as the database name.
     */
    databaseName?: string;
    /**
     * S3 Staging Directory. Example: s3://postgres/input/
     */
    s3StagingDir?: string;
    /**
     * Athena workgroup.
     */
    workgroup?: string;
    /**
     * This parameter determines the mode of authentication for connecting to AzureSQL using
     * ODBC. If 'Active Directory Password' is selected, you need to provide the password. If
     * 'Active Directory Integrated' is selected, password is not required as it uses the
     * logged-in user's credentials. This mode is useful for establishing secure and seamless
     * connections with AzureSQL.
     *
     * This parameter determines the mode of authentication for connecting to Azure Synapse
     * using ODBC. If 'Active Directory Password' is selected, you need to provide the password.
     * If 'Active Directory Integrated' is selected, password is not required as it uses the
     * logged-in user's credentials. This mode is useful for establishing secure and seamless
     * connections with Azure Synapse.
     */
    authenticationMode?: any[] | boolean | number | null | AuthenticationModeObject | string;
    /**
     * Database of the data source. This is optional parameter, if you would like to restrict
     * the metadata reading to a single database. When left blank, OpenMetadata Ingestion
     * attempts to scan all the databases.
     *
     * Database of the data source.
     *
     * Initial Redshift database to connect to. If you want to ingest all databases, set
     * ingestAllDatabases to true.
     */
    database?: string;
    /**
     * SQLAlchemy driver for AzureSQL.
     *
     * ODBC driver version in case of pyodbc connection.
     */
    driver?: string;
    /**
     * Ingest data from all databases in Azuresql. You can use databaseFilterPattern on top of
     * this.
     *
     * Ingest data from all databases in Mssql. You can use databaseFilterPattern on top of
     * this.
     *
     * Ingest data from all databases in Postgres. You can use databaseFilterPattern on top of
     * this.
     *
     * Ingest data from all databases in Redshift. You can use databaseFilterPattern on top of
     * this.
     *
     * Ingest data from all databases in Greenplum. You can use databaseFilterPattern on top of
     * this.
     *
     * Ingest data from all databases in Azure Synapse. You can use databaseFilterPattern on top
     * of this.
     */
    ingestAllDatabases?: boolean;
    /**
     * Database Schema of the data source. This is optional parameter, if you would like to
     * restrict the metadata reading to a single schema. When left blank, OpenMetadata Ingestion
     * attempts to scan all the schemas.
     *
     * databaseSchema of the data source. This is optional parameter, if you would like to
     * restrict the metadata reading to a single databaseSchema. When left blank, OpenMetadata
     * Ingestion attempts to scan all the databaseSchema.
     *
     * Optional name to give to the schema in OpenMetadata. If left blank, we will use default
     * as the schema name
     */
    databaseSchema?: string;
    /**
     * Clickhouse SQL connection duration.
     */
    duration?: number;
    /**
     * Use HTTPS Protocol for connection with clickhouse
     */
    https?: boolean;
    /**
     * Path to key file for establishing secure connection
     */
    keyfile?: string;
    /**
     * Establish secure connection with clickhouse
     */
    secure?: boolean;
    /**
     * Catalog of the data source(Example: hive_metastore). This is optional parameter, if you
     * would like to restrict the metadata reading to a single catalog. When left blank,
     * OpenMetadata Ingestion attempts to scan all the catalog.
     *
     * Presto catalog
     *
     * Catalog of the data source.
     */
    catalog?: IcebergCatalog | string;
    /**
     * The maximum amount of time (in seconds) to wait for a successful connection to the data
     * source. If the connection attempt takes longer than this timeout period, an error will be
     * returned.
     */
    connectionTimeout?: number;
    /**
     * Databricks compute resources URL.
     */
    httpPath?:                      string;
    supportsViewLineageExtraction?: boolean;
    /**
     * Available sources to fetch the metadata.
     *
     * Available sources to fetch files.
     *
     * Available sources to fetch metadata.
     */
    configSource?: DeltaLakeConfigurationSource;
    /**
     * Authentication mode to connect to hive.
     */
    auth?: AuthEnum;
    /**
     * Authentication options to pass to Hive connector. These options are based on SQLAlchemy.
     *
     * Authentication options to pass to Impala connector. These options are based on SQLAlchemy.
     */
    authOptions?: string;
    /**
     * If authenticating with Kerberos specify the Kerberos service name
     */
    kerberosServiceName?: string;
    /**
     * Hive Metastore Connection Details
     */
    metastoreConnection?: HiveMetastoreConnectionDetails;
    /**
     * Authentication mode to connect to Impala.
     */
    authMechanism?: AuthMechanismEnum;
    /**
     * Establish secure connection with Impala
     */
    useSSL?: boolean;
    /**
     * How to run the SQLite database. :memory: by default.
     */
    databaseMode?: string;
    /**
     * This directory will be used to set the LD_LIBRARY_PATH env variable. It is required if
     * you need to enable thick connection mode. By default, we bring instant client 19 and
     * point to /instantclient.
     */
    instantClientDirectory?: string;
    /**
     * Connect with oracle by either passing service name or database schema name.
     */
    oracleConnectionType?: OracleConnectionType;
    /**
     * Custom OpenMetadata Classification name for Postgres policy tags.
     */
    classificationName?: string;
    sslMode?:            SSLMode;
    /**
     * Protocol ( Connection Argument ) to connect to Presto.
     */
    protocol?: string;
    /**
     * Verify ( Connection Argument for SSL ) to connect to Presto.
     *
     * Verify ( Connection Argument for SSL ) to connect to Trino.
     */
    verify?: string;
    /**
     * Salesforce Organization ID is the unique identifier for your Salesforce identity
     */
    organizationId?: string;
    /**
     * API version of the Salesforce instance
     */
    salesforceApiVersion?: string;
    /**
     * Domain of Salesforce instance
     */
    salesforceDomain?: string;
    /**
     * Salesforce Security Token.
     */
    securityToken?: string;
    /**
     * Salesforce Object Name.
     */
    sobjectName?: string;
    /**
     * If the Snowflake URL is https://xyz1234.us-east-1.gcp.snowflakecomputing.com, then the
     * account is xyz1234.us-east-1.gcp
     *
     * Specifies an account string to override the default account string defined for the
     * database user. Accounts are used by the database for workload management and resource
     * usage monitoring.
     */
    account?: string;
    /**
     * Optional configuration for ingestion to keep the client session active in case the
     * ingestion process runs for longer durations.
     */
    clientSessionKeepAlive?: boolean;
    /**
     * Optional configuration for ingestion of TRANSIENT tables, By default, it will skip the
     * TRANSIENT tables.
     */
    includeTransientTables?: boolean;
    /**
     * Connection to Snowflake instance via Private Key
     */
    privateKey?: string;
    /**
     * Session query tag used to monitor usage on snowflake. To use a query tag snowflake user
     * should have enough privileges to alter the session.
     */
    queryTag?: string;
    /**
     * Snowflake Role.
     */
    role?: string;
    /**
     * Snowflake Passphrase Key used with Private Key
     */
    snowflakePrivatekeyPassphrase?: string;
    /**
     * Snowflake warehouse.
     */
    warehouse?: string;
    /**
     * Proxies for the connection to Trino data source
     */
    proxies?: { [key: string]: string };
    /**
     * Pinot Controller Host and Port of the data source.
     */
    pinotControllerHost?: string;
    /**
     * Bucket Name of the data source.
     */
    bucketName?: string;
    /**
     * Prefix of the data source.
     */
    prefix?: string;
    /**
     * Couchbase connection Bucket options.
     */
    bucket?: string;
    /**
     * Hostname of the Couchbase service.
     */
    hostport?: string;
    /**
     * Enable dataflow for ingestion
     */
    dataflows?: boolean;
    /**
     * Custom filter for dataflows
     */
    dataflowsCustomFilter?: { [key: string]: any } | string;
    /**
     * Enable datatables for ingestion
     */
    datatables?: boolean;
    /**
     * Custom filter for datatables
     */
    dataTablesCustomFilter?: { [key: string]: any } | string;
    /**
     * Enable report for ingestion
     */
    reports?: boolean;
    /**
     * Custom filter for reports
     */
    reportsCustomFilter?: { [key: string]: any } | string;
    /**
     * Hostname of SAS Viya deployment.
     */
    serverHost?: string;
    /**
     * Table property to look for the Owner.
     */
    ownershipProperty?: string;
    /**
     * Specifies additional data needed by a logon mechanism, such as a secure token,
     * Distinguished Name, or a domain/realm name. LOGDATA values are specific to each logon
     * mechanism.
     */
    logdata?: string;
    /**
     * Specifies the logon authentication method. Possible values are TD2 (the default), JWT,
     * LDAP, KRB5 for Kerberos, or TDNEGO
     */
    logmech?: Logmech;
    /**
     * Specifies the transaction mode for the connection
     */
    tmode?: TransactionMode;
    /**
     * Client SSL/TLS settings.
     */
    tls?: SSLTLSSettings;
    /**
     * basic.auth.user.info schema registry config property, Client HTTP credentials in the form
     * of username:password.
     */
    basicAuthUserInfo?: string;
    /**
     * Kafka bootstrap servers. add them in comma separated values ex: host1:9092,host2:9092
     *
     * Redpanda bootstrap servers. add them in comma separated values ex: host1:9092,host2:9092
     */
    bootstrapServers?: string;
    /**
     * Confluent Kafka Consumer Config. From
     * https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md
     *
     * Confluent Redpanda Consumer Config
     */
    consumerConfig?: { [key: string]: any };
    /**
     * sasl.mechanism Consumer Config property
     */
    saslMechanism?: SaslMechanismType;
    /**
     * sasl.password consumer config property
     */
    saslPassword?: string;
    /**
     * sasl.username consumer config property
     */
    saslUsername?: string;
    /**
     * Confluent Kafka Schema Registry Config. From
     * https://docs.confluent.io/5.5.1/clients/confluent-kafka-python/index.html#confluent_kafka.schema_registry.SchemaRegistryClient
     *
     * Confluent Redpanda Schema Registry Config.
     */
    schemaRegistryConfig?: { [key: string]: any };
    /**
     * Schema Registry SSL Config. Configuration for enabling SSL for the Schema Registry
     * connection.
     */
    schemaRegistrySSL?: SchemaRegistrySSLClass;
    /**
     * Schema Registry Topic Suffix Name. The suffix to be appended to the topic name to get
     * topic schema from registry.
     */
    schemaRegistryTopicSuffixName?: string;
    /**
     * Confluent Kafka Schema Registry URL.
     *
     * Confluent Redpanda Schema Registry URL.
     */
    schemaRegistryURL?: string;
    /**
     * security.protocol consumer config property
     *
     * Kafka security protocol config
     */
    securityProtocol?: KafkaSecurityProtocol;
    /**
     * Enable encryption for the Amundsen Neo4j Connection.
     */
    encrypted?: boolean;
    /**
     * Maximum connection lifetime for the Amundsen Neo4j Connection.
     */
    maxConnectionLifeTime?: number;
    /**
     * Enable SSL validation for the Amundsen Neo4j Connection.
     */
    validateSSL?: boolean;
    /**
     * Maximum number of events sent in a batch (Default 100).
     */
    batchSize?: number;
    /**
     * List of entities that you need to reindex
     */
    entities?:      string[];
    recreateIndex?: boolean;
    runMode?:       RunMode;
    /**
     * Recreate Indexes with updated Language
     */
    searchIndexMappingLanguage?: SearchIndexMappingLanguage;
    /**
     * OpenMetadata Server Authentication Provider.
     */
    authProvider?: AuthProvider;
    /**
     * Cluster name to differentiate OpenMetadata Server instance
     */
    clusterName?: string;
    /**
     * Configuration for Sink Component in the OpenMetadata Ingestion Framework.
     */
    elasticsSearch?: ConfigElasticsSearch;
    /**
     * Validate Openmetadata Server & Client Version.
     */
    enableVersionValidation?: boolean;
    extraHeaders?:            { [key: string]: string };
    /**
     * Force the overwriting of any entity during the ingestion.
     */
    forceEntityOverwriting?: boolean;
    /**
     * Include Dashboards for Indexing
     */
    includeDashboards?: boolean;
    /**
     * Include Database Services for Indexing
     */
    includeDatabaseServices?: boolean;
    /**
     * Include Glossary Terms for Indexing
     */
    includeGlossaryTerms?: boolean;
    /**
     * Include Messaging Services for Indexing
     */
    includeMessagingServices?: boolean;
    /**
     * Include MlModels for Indexing
     */
    includeMlModels?: boolean;
    /**
     * Include Pipelines for Indexing
     */
    includePipelines?: boolean;
    /**
     * Include Pipeline Services for Indexing
     */
    includePipelineServices?: boolean;
    /**
     * Include Tags for Policy
     */
    includePolicy?: boolean;
    /**
     * Include Tables for Indexing
     */
    includeTables?: boolean;
    /**
     * Include Tags for Indexing
     */
    includeTags?: boolean;
    /**
     * Include Teams for Indexing
     */
    includeTeams?: boolean;
    /**
     * Include Topics for Indexing
     */
    includeTopics?: boolean;
    /**
     * Include Users for Indexing
     */
    includeUsers?: boolean;
    /**
     * Limit the number of records for Indexing.
     */
    limitRecords?: number;
    /**
     * Secrets Manager Loader for the Pipeline Service Client.
     */
    secretsManagerLoader?: SecretsManagerClientLoader;
    /**
     * Secrets Manager Provider for OpenMetadata Server.
     */
    secretsManagerProvider?: SecretsManagerProvider;
    /**
     * OpenMetadata Client security configuration.
     */
    securityConfig?: OpenMetadataJWTClientConfig;
    /**
     * If set to true, when creating a service during the ingestion we will store its Service
     * Connection. Otherwise, the ingestion will create a bare service without connection
     * details.
     */
    storeServiceConnection?: boolean;
    /**
     * Flag to enable Data Insight Extraction
     */
    supportsDataInsightExtraction?: boolean;
    /**
     * Flag to enable ElasticSearch Reindexing Extraction
     */
    supportsElasticSearchReindexingExtraction?: boolean;
    /**
     * service type of the data source.
     */
    databaseServiceName?: string[];
    /**
     * Name of the Entity Type available in Atlas.
     */
    entity_type?: string;
    /**
     * service type of the messaging source
     *
     * Name of the Kafka Messaging Service associated with this KafkaConnect Pipeline Service.
     * e.g. local_kafka
     */
    messagingServiceName?: string[] | string;
    /**
     * Custom OpenMetadata Classification name for alation tags.
     */
    alationTagClassificationName?: string;
    /**
     * Specifies if hidden datasources should be included while ingesting.
     */
    includeHiddenDatasources?: boolean;
    /**
     * Specifies if undeployed datasources should be included while ingesting.
     */
    includeUndeployedDatasources?: boolean;
    /**
     * Specifies if Dashboards are to be ingested while running the ingestion job.
     */
    ingestDashboards?: boolean;
    /**
     * Specifies if Datasources are to be ingested while running the ingestion job.
     */
    ingestDatasources?: boolean;
    /**
     * Specifies if Domains are to be ingested while running the ingestion job.
     */
    ingestDomains?: boolean;
    /**
     * Specifies if Knowledge Articles are to be ingested while running the ingestion job.
     */
    ingestKnowledgeArticles?: boolean;
    /**
     * Specifies if Users and Groups are to be ingested while running the ingestion job.
     */
    ingestUsersAndGroups?: boolean;
    datasourceLinks?:      { [key: string]: string };
    /**
     * Pipeline Service Number Of Status
     */
    numberOfStatus?: number;
    /**
     * Fivetran API Secret.
     */
    apiSecret?: string;
    /**
     * Fivetran API Limit For Pagination.
     */
    limit?: number;
    /**
     * URL to the Dagster instance
     *
     * DBT cloud Access URL.
     */
    host?: string;
    /**
     * Connection Time Limit Between OM and Dagster Graphql API in second
     */
    timeout?: number;
    /**
     * We support username/password or client certificate authentication
     */
    nifiConfig?: NifiCredentialsConfiguration;
    /**
     * Spline UI Host & Port.
     */
    uiHostPort?: string;
    /**
     * service type of the messaging source
     */
    brokersUrl?: string;
    /**
     * consumer group name
     */
    consumerGroupName?: string;
    /**
     * initial Kafka consumer offset
     */
    consumerOffsets?: InitialConsumerOffsets;
    /**
     * max allowed wait time
     */
    poolTimeout?: number;
    /**
     * SASL Configuration details.
     */
    saslConfig?: SASLClientConfig;
    /**
     * max allowed inactivity time
     */
    sessionTimeout?: number;
    /**
     * topic from where Open lineage events will be pulled
     */
    topicName?: string;
    /**
     * We support username/password or No Authentication
     */
    KafkaConnectConfig?: UsernamePasswordAuthentication;
    /**
     * ID of your DBT cloud account
     */
    accountId?: string;
    /**
     * DBT cloud Metadata API URL.
     */
    discoveryAPI?: string;
    /**
     * List of IDs of your DBT cloud jobs seperated by comma `,`
     */
    jobIds?: string[];
    /**
     * List of IDs of your DBT cloud projects seperated by comma `,`
     */
    projectIds?: string[];
    /**
     * The name of your azure data factory.
     */
    factory_name?: string;
    /**
     * The name of your resource group the data factory is associated with.
     */
    resource_group_name?: string;
    /**
     * Number of days in the past to filter pipeline runs.
     */
    run_filter_days?: number;
    /**
     * The azure subscription identifier.
     */
    subscription_id?: string;
    /**
     * Mlflow Model registry backend. E.g.,
     * mysql+pymysql://mlflow:password@localhost:3307/experiments
     */
    registryUri?: string;
    /**
     * Mlflow Experiment tracking URI. E.g., http://localhost:5000
     */
    trackingUri?: string;
    /**
     * location/region of google cloud project
     */
    location?: string;
    /**
     * Bucket Names of the data source.
     */
    bucketNames?: string[];
    /**
     * Connection Timeout in Seconds
     */
    connectionTimeoutSecs?: number;
    /**
     * Keep Alive Timeout in Seconds
     */
    keepAliveTimeoutSecs?: number;
    /**
     * Socket Timeout in Seconds
     */
    socketTimeoutSecs?: number;
    /**
     * Truststore Password
     */
    truststorePassword?: string;
    /**
     * Truststore Path
     */
    truststorePath?: string;
}

/**
 * We support username/password or No Authentication
 *
 * username/password auth
 */
export interface UsernamePasswordAuthentication {
    /**
     * KafkaConnect password to authenticate to the API.
     */
    password?: string;
    /**
     * KafkaConnect user to authenticate to the API.
     */
    username?: string;
}

/**
 * Authentication mode to connect to hive.
 */
export enum AuthEnum {
    Basic = "BASIC",
    Custom = "CUSTOM",
    Gssapi = "GSSAPI",
    Jwt = "JWT",
    Kerberos = "KERBEROS",
    LDAP = "LDAP",
    None = "NONE",
    Nosasl = "NOSASL",
    Plain = "PLAIN",
}

/**
 * Authentication mode to connect to Impala.
 */
export enum AuthMechanismEnum {
    Gssapi = "GSSAPI",
    Jwt = "JWT",
    LDAP = "LDAP",
    Nosasl = "NOSASL",
    Plain = "PLAIN",
}

/**
 * OpenMetadata Server Authentication Provider.
 *
 * OpenMetadata Server Authentication Provider. Make sure configure same auth providers as
 * the one configured on OpenMetadata server.
 */
export enum AuthProvider {
    Auth0 = "auth0",
    AwsCognito = "aws-cognito",
    Azure = "azure",
    Basic = "basic",
    CustomOidc = "custom-oidc",
    Google = "google",
    LDAP = "ldap",
    Okta = "okta",
    Openmetadata = "openmetadata",
    Saml = "saml",
}

/**
 * Types of methods used to authenticate to the tableau instance
 *
 * Basic Auth Credentials
 *
 * Access Token Auth Credentials
 *
 * Choose Auth Config Type.
 *
 * Common Database Connection Config
 *
 * IAM Auth Database Connection Config
 *
 * Azure Database Connection Config
 *
 * Types of methods used to authenticate to the alation instance
 *
 * API Access Token Auth Credentials
 *
 * Basic Auth Configuration for ElasticSearch
 *
 * SSL Certificates By Path
 */
export interface AuthenticationTypeForTableau {
    /**
     * Password to access the service.
     *
     * Password to connect to source.
     *
     * Elastic Search Password for Login
     */
    password?: string;
    /**
     * Username to access the service.
     *
     * Elastic Search Username for Login
     */
    username?: string;
    /**
     * Personal Access Token Name.
     */
    personalAccessTokenName?: string;
    /**
     * Personal Access Token Secret.
     */
    personalAccessTokenSecret?: string;
    awsConfig?:                 AWSCredentials;
    azureConfig?:               AzureCredentials;
    /**
     * JWT to connect to source.
     */
    jwt?: string;
    /**
     * Access Token for the API
     */
    accessToken?: string;
    /**
     * CA Certificate Path
     */
    caCertPath?: string;
    /**
     * Client Certificate Path
     */
    clientCertPath?: string;
    /**
     * Private Key Path
     */
    privateKeyPath?: string;
}

/**
 * AWS credentials configs.
 */
export interface AWSCredentials {
    /**
     * The Amazon Resource Name (ARN) of the role to assume. Required Field in case of Assume
     * Role
     */
    assumeRoleArn?: string;
    /**
     * An identifier for the assumed role session. Use the role session name to uniquely
     * identify a session when the same role is assumed by different principals or for different
     * reasons. Required Field in case of Assume Role
     */
    assumeRoleSessionName?: string;
    /**
     * The Amazon Resource Name (ARN) of the role to assume. Optional Field in case of Assume
     * Role
     */
    assumeRoleSourceIdentity?: string;
    /**
     * AWS Access key ID.
     */
    awsAccessKeyId?: string;
    /**
     * AWS Region
     */
    awsRegion: string;
    /**
     * AWS Secret Access Key.
     */
    awsSecretAccessKey?: string;
    /**
     * AWS Session Token.
     */
    awsSessionToken?: string;
    /**
     * EndPoint URL for the AWS
     */
    endPointURL?: string;
    /**
     * The name of a profile to use with the boto session.
     */
    profileName?: string;
}

/**
 * Azure Cloud Credentials
 *
 * Available sources to fetch metadata.
 *
 * Azure Credentials
 */
export interface AzureCredentials {
    /**
     * Account Name of your storage account
     */
    accountName?: string;
    /**
     * Your Service Principal App ID (Client ID)
     */
    clientId?: string;
    /**
     * Your Service Principal Password (Client Secret)
     */
    clientSecret?: string;
    /**
     * Scopes to get access token, for e.g. api://6dfX33ab-XXXX-49df-XXXX-3459eX817d3e/.default
     */
    scopes?: string;
    /**
     * Tenant ID of your Azure Subscription
     */
    tenantId?: string;
    /**
     * Key Vault Name
     */
    vaultName?: string;
}

/**
 * Database Authentication types not requiring config.
 */
export enum NoConfigAuthenticationTypes {
    OAuth2 = "OAuth2",
}

export interface AuthenticationModeObject {
    /**
     * Authentication from Connection String for AzureSQL.
     *
     * Authentication from Connection String for Azure Synapse.
     */
    authentication?: Authentication;
    /**
     * Connection Timeout from Connection String for AzureSQL.
     *
     * Connection Timeout from Connection String for Azure Synapse.
     */
    connectionTimeout?: number;
    /**
     * Encrypt from Connection String for AzureSQL.
     *
     * Encrypt from Connection String for Azure Synapse.
     */
    encrypt?: boolean;
    /**
     * Trust Server Certificate from Connection String for AzureSQL.
     *
     * Trust Server Certificate from Connection String for Azure Synapse.
     */
    trustServerCertificate?: boolean;
    [property: string]: any;
}

/**
 * Authentication from Connection String for AzureSQL.
 *
 * Authentication from Connection String for Azure Synapse.
 */
export enum Authentication {
    ActiveDirectoryIntegrated = "ActiveDirectoryIntegrated",
    ActiveDirectoryPassword = "ActiveDirectoryPassword",
}

/**
 * Iceberg Catalog configuration.
 */
export interface IcebergCatalog {
    /**
     * Catalog connection configuration, depending on your catalog type.
     */
    connection: Connection;
    /**
     * Custom Database Name for your Iceberg Service. If not set it will be 'default'.
     */
    databaseName?: string;
    /**
     * Catalog Name.
     */
    name: string;
    /**
     * Warehouse Location. Used to specify a custom warehouse location if needed.
     */
    warehouseLocation?: string;
}

/**
 * Catalog connection configuration, depending on your catalog type.
 *
 * Iceberg Hive Catalog configuration.
 *
 * Iceberg REST Catalog configuration.
 *
 * Iceberg Glue Catalog configuration.
 *
 * Iceberg DynamoDB Catalog configuration.
 */
export interface Connection {
    fileSystem?: IcebergFileSystem;
    /**
     * Uri to the Hive Metastore. Example: 'thrift://localhost:9083'
     *
     * Uri to the REST catalog. Example: 'http://rest-catalog/ws/'
     */
    uri?: string;
    /**
     * OAuth2 credential to use when initializing the catalog.
     */
    credential?: OAuth2Credential;
    /**
     * Sign requests to the REST Server using AWS SigV4 protocol.
     */
    sigv4?: Sigv4;
    /**
     * SSL Configuration details.
     */
    ssl?: SSLCertificatesByPath;
    /**
     * Berarer token to use for the 'Authorization' header.
     */
    token?:     string;
    awsConfig?: AWSCredentials;
    /**
     * DynamoDB table name.
     */
    tableName?: string;
}

/**
 * OAuth2 credential to use when initializing the catalog.
 */
export interface OAuth2Credential {
    /**
     * OAuth2 Client ID.
     */
    clientId?: string;
    /**
     * OAuth2 Client Secret
     */
    clientSecret?: string;
}

/**
 * Iceberg File System configuration, based on where the Iceberg Warehouse is located.
 */
export interface IcebergFileSystem {
    type?: Credentials | null;
}

/**
 * AWS credentials configs.
 *
 * Azure Cloud Credentials
 *
 * Available sources to fetch metadata.
 *
 * Azure Credentials
 */
export interface Credentials {
    /**
     * The Amazon Resource Name (ARN) of the role to assume. Required Field in case of Assume
     * Role
     */
    assumeRoleArn?: string;
    /**
     * An identifier for the assumed role session. Use the role session name to uniquely
     * identify a session when the same role is assumed by different principals or for different
     * reasons. Required Field in case of Assume Role
     */
    assumeRoleSessionName?: string;
    /**
     * The Amazon Resource Name (ARN) of the role to assume. Optional Field in case of Assume
     * Role
     */
    assumeRoleSourceIdentity?: string;
    /**
     * AWS Access key ID.
     */
    awsAccessKeyId?: string;
    /**
     * AWS Region
     */
    awsRegion?: string;
    /**
     * AWS Secret Access Key.
     */
    awsSecretAccessKey?: string;
    /**
     * AWS Session Token.
     */
    awsSessionToken?: string;
    /**
     * EndPoint URL for the AWS
     */
    endPointURL?: string;
    /**
     * The name of a profile to use with the boto session.
     */
    profileName?: string;
    /**
     * Account Name of your storage account
     */
    accountName?: string;
    /**
     * Your Service Principal App ID (Client ID)
     */
    clientId?: string;
    /**
     * Your Service Principal Password (Client Secret)
     */
    clientSecret?: string;
    /**
     * Scopes to get access token, for e.g. api://6dfX33ab-XXXX-49df-XXXX-3459eX817d3e/.default
     */
    scopes?: string;
    /**
     * Tenant ID of your Azure Subscription
     */
    tenantId?: string;
    /**
     * Key Vault Name
     */
    vaultName?: string;
}

/**
 * Sign requests to the REST Server using AWS SigV4 protocol.
 */
export interface Sigv4 {
    /**
     * The service signing name to use when SigV4 signs a request.
     */
    signingName?: string;
    /**
     * AWS Region to use when SigV4 signs a request.
     */
    signingRegion?: string;
    [property: string]: any;
}

/**
 * SSL Configuration details.
 *
 * SSL Certificates By Path
 */
export interface SSLCertificatesByPath {
    /**
     * CA Certificate Path
     */
    caCertPath?: string;
    /**
     * Client Certificate Path
     */
    clientCertPath?: string;
    /**
     * Private Key Path
     */
    privateKeyPath?: string;
}

/**
 * Qlik Authentication Certificate By Values
 *
 * Qlik Authentication Certificate File Path
 */
export interface QlikCertificatesBy {
    sslConfig?: SchemaRegistrySSLClass;
    /**
     * Client Certificate
     */
    clientCertificate?: string;
    /**
     * Client Key Certificate.
     */
    clientKeyCertificate?: string;
    /**
     * Root Certificate.
     */
    rootCertificate?: string;
    [property: string]: any;
}

/**
 * Client SSL configuration
 *
 * SSL Configuration details.
 *
 * Schema Registry SSL Config. Configuration for enabling SSL for the Schema Registry
 * connection.
 *
 * SSL Configuration for OpenMetadata Server
 *
 * OpenMetadata Client configured to validate SSL certificates.
 */
export interface SchemaRegistrySSLClass {
    /**
     * The CA certificate used for SSL validation.
     */
    caCertificate?: string;
    /**
     * The SSL certificate used for client authentication.
     */
    sslCertificate?: string;
    /**
     * The private key associated with the SSL certificate.
     */
    sslKey?: string;
}

/**
 * Available sources to fetch the metadata.
 *
 * Deltalake Metastore configuration.
 *
 * DeltaLake Storage Connection Config
 *
 * Available sources to fetch files.
 *
 * Local config source where no extra information needs to be sent.
 *
 * Azure Datalake Storage will ingest files in container
 *
 * DataLake GCS storage will ingest metadata of files
 *
 * DataLake S3 bucket will ingest metadata of files in bucket
 *
 * Azure Cloud Credentials
 *
 * Available sources to fetch metadata.
 *
 * Azure Credentials
 */
export interface DeltaLakeConfigurationSource {
    /**
     * pySpark App Name.
     */
    appName?: string;
    /**
     * Metastore connection configuration, depending on your metastore type.
     *
     * Available sources to fetch files.
     */
    connection?: ConnectionClass;
    /**
     * Bucket Name of the data source.
     */
    bucketName?: string;
    /**
     * Prefix of the data source.
     */
    prefix?:         string;
    securityConfig?: SecurityConfigClass;
    /**
     * Account Name of your storage account
     */
    accountName?: string;
    /**
     * Your Service Principal App ID (Client ID)
     */
    clientId?: string;
    /**
     * Your Service Principal Password (Client Secret)
     */
    clientSecret?: string;
    /**
     * Scopes to get access token, for e.g. api://6dfX33ab-XXXX-49df-XXXX-3459eX817d3e/.default
     */
    scopes?: string;
    /**
     * Tenant ID of your Azure Subscription
     */
    tenantId?: string;
    /**
     * Key Vault Name
     */
    vaultName?: string;
}

/**
 * Metastore connection configuration, depending on your metastore type.
 *
 * Available sources to fetch files.
 *
 * DataLake S3 bucket will ingest metadata of files in bucket
 */
export interface ConnectionClass {
    /**
     * Thrift connection to the metastore service. E.g., localhost:9083
     */
    metastoreHostPort?: string;
    /**
     * Driver class name for JDBC metastore. The value will be mapped as
     * spark.hadoop.javax.jdo.option.ConnectionDriverName sparks property. E.g.,
     * org.mariadb.jdbc.Driver
     */
    driverName?: string;
    /**
     * Class path to JDBC driver required for JDBC connection. The value will be mapped as
     * spark.driver.extraClassPath sparks property.
     */
    jdbcDriverClassPath?: string;
    /**
     * JDBC connection to the metastore database. E.g., jdbc:mysql://localhost:3306/demo_hive
     */
    metastoreDb?: string;
    /**
     * Password to use against metastore database. The value will be mapped as
     * spark.hadoop.javax.jdo.option.ConnectionPassword sparks property.
     */
    password?: string;
    /**
     * Username to use against metastore database. The value will be mapped as
     * spark.hadoop.javax.jdo.option.ConnectionUserName sparks property.
     */
    username?: string;
    /**
     * Local path for the local file with metastore data. E.g., /tmp/metastore.db
     */
    metastoreFilePath?: string;
    securityConfig?:    AWSCredentials;
}

/**
 * Azure Cloud Credentials
 *
 * Available sources to fetch metadata.
 *
 * Azure Credentials
 *
 * GCP credentials configs.
 *
 * GCP Credentials
 *
 * AWS credentials configs.
 */
export interface SecurityConfigClass {
    /**
     * Account Name of your storage account
     */
    accountName?: string;
    /**
     * Your Service Principal App ID (Client ID)
     */
    clientId?: string;
    /**
     * Your Service Principal Password (Client Secret)
     */
    clientSecret?: string;
    /**
     * Scopes to get access token, for e.g. api://6dfX33ab-XXXX-49df-XXXX-3459eX817d3e/.default
     */
    scopes?: string;
    /**
     * Tenant ID of your Azure Subscription
     */
    tenantId?: string;
    /**
     * Key Vault Name
     */
    vaultName?: string;
    /**
     * We support two ways of authenticating to GCP i.e via GCP Credentials Values or GCP
     * Credentials Path
     */
    gcpConfig?: GCPCredentialsConfiguration;
    /**
     * we enable the authenticated service account to impersonate another service account
     */
    gcpImpersonateServiceAccount?: GCPImpersonateServiceAccountValues;
    /**
     * The Amazon Resource Name (ARN) of the role to assume. Required Field in case of Assume
     * Role
     */
    assumeRoleArn?: string;
    /**
     * An identifier for the assumed role session. Use the role session name to uniquely
     * identify a session when the same role is assumed by different principals or for different
     * reasons. Required Field in case of Assume Role
     */
    assumeRoleSessionName?: string;
    /**
     * The Amazon Resource Name (ARN) of the role to assume. Optional Field in case of Assume
     * Role
     */
    assumeRoleSourceIdentity?: string;
    /**
     * AWS Access key ID.
     */
    awsAccessKeyId?: string;
    /**
     * AWS Region
     */
    awsRegion?: string;
    /**
     * AWS Secret Access Key.
     */
    awsSecretAccessKey?: string;
    /**
     * AWS Session Token.
     */
    awsSessionToken?: string;
    /**
     * EndPoint URL for the AWS
     */
    endPointURL?: string;
    /**
     * The name of a profile to use with the boto session.
     */
    profileName?: string;
}

/**
 * We support two ways of authenticating to GCP i.e via GCP Credentials Values or GCP
 * Credentials Path
 *
 * Pass the raw credential values provided by GCP
 *
 * Pass the path of file containing the GCP credentials info
 */
export interface GCPCredentialsConfiguration {
    /**
     * Google Cloud auth provider certificate.
     */
    authProviderX509CertUrl?: string;
    /**
     * Google Cloud auth uri.
     */
    authUri?: string;
    /**
     * Google Cloud email.
     */
    clientEmail?: string;
    /**
     * Google Cloud Client ID.
     */
    clientId?: string;
    /**
     * Google Cloud client certificate uri.
     */
    clientX509CertUrl?: string;
    /**
     * Google Cloud private key.
     */
    privateKey?: string;
    /**
     * Google Cloud private key id.
     */
    privateKeyId?: string;
    /**
     * Project ID
     *
     * GCP Project ID to parse metadata from
     */
    projectId?: string[] | string;
    /**
     * Google Cloud token uri.
     */
    tokenUri?: string;
    /**
     * Google Cloud Platform account type.
     */
    type?: string;
    /**
     * Path of the file containing the GCP credentials info
     */
    path?: string;
    /**
     * Google Security Token Service audience which contains the resource name for the workload
     * identity pool and the provider identifier in that pool.
     */
    audience?: string;
    /**
     * This object defines the mechanism used to retrieve the external credential from the local
     * environment so that it can be exchanged for a GCP access token via the STS endpoint
     */
    credentialSource?: { [key: string]: string };
    /**
     * Google Cloud Platform account type.
     */
    externalType?: string;
    /**
     * Google Security Token Service subject token type based on the OAuth 2.0 token exchange
     * spec.
     */
    subjectTokenType?: string;
    /**
     * Google Security Token Service token exchange endpoint.
     */
    tokenURL?: string;
    [property: string]: any;
}

/**
 * we enable the authenticated service account to impersonate another service account
 *
 * Pass the values to impersonate a service account of Google Cloud
 */
export interface GCPImpersonateServiceAccountValues {
    /**
     * The impersonated service account email
     */
    impersonateServiceAccount?: string;
    /**
     * Number of seconds the delegated credential should be valid
     */
    lifetime?: number;
    [property: string]: any;
}

/**
 * Choose between API or database connection fetch metadata from superset.
 *
 * Superset API Connection Config
 *
 * Postgres Database Connection Config
 *
 * Mysql Database Connection Config
 *
 * Choose between Database connection or HDB User Store connection.
 *
 * Sap Hana Database SQL Connection Config
 *
 * Sap Hana Database HDB User Store Connection Config
 *
 * Choose between mysql and postgres connection for alation database
 *
 * Underlying database connection. See
 * https://airflow.apache.org/docs/apache-airflow/stable/howto/set-up-database.html for
 * supported backends.
 *
 * Lineage Backend Connection Config
 *
 * SQLite Database Connection Config
 *
 * Matillion Auth Configuration
 *
 * Matillion ETL Auth Config
 */
export interface ConnectionObject {
    /**
     * Password for Superset.
     *
     * Password to connect to Hana.
     *
     * Password to connect to SQLite. Blank for in-memory database.
     *
     * Password to connect to the Matillion.
     */
    password?: string;
    /**
     * Authentication provider for the Superset service. For basic user/password authentication,
     * the default value `db` can be used. This parameter is used internally to connect to
     * Superset's REST API.
     */
    provider?: Provider;
    /**
     * SSL Configuration details.
     */
    sslConfig?: ConnectionSSLConfig;
    /**
     * Username for Superset.
     *
     * Username to connect to Postgres. This user should have privileges to read all the
     * metadata in Postgres.
     *
     * Username to connect to MySQL. This user should have privileges to read all the metadata
     * in Mysql.
     *
     * Username to connect to Hana. This user should have privileges to read all the metadata.
     *
     * Username to connect to SQLite. Blank for in-memory database.
     *
     * Username to connect to the Matillion. This user should have privileges to read all the
     * metadata in Matillion.
     */
    username?:  string;
    verifySSL?: VerifySSL;
    /**
     * Choose Auth Config Type.
     */
    authType?: AuthConfigurationType;
    /**
     * Custom OpenMetadata Classification name for Postgres policy tags.
     */
    classificationName?:  string;
    connectionArguments?: { [key: string]: any };
    connectionOptions?:   { [key: string]: string };
    /**
     * Database of the data source. This is optional parameter, if you would like to restrict
     * the metadata reading to a single database. When left blank, OpenMetadata Ingestion
     * attempts to scan all the databases.
     *
     * Database of the data source.
     */
    database?: string;
    /**
     * Host and port of the source service.
     *
     * Host and port of the MySQL service.
     *
     * Host and port of the Hana service.
     *
     * Host and port of the SQLite service. Blank for in-memory database.
     *
     * Matillion Host
     */
    hostPort?: string;
    /**
     * Ingest data from all databases in Postgres. You can use databaseFilterPattern on top of
     * this.
     */
    ingestAllDatabases?:      boolean;
    sampleDataStorageConfig?: SampleDataStorageConfig;
    /**
     * SQLAlchemy driver scheme options.
     */
    scheme?:                     ConnectionScheme;
    sslMode?:                    SSLMode;
    supportsDatabase?:           boolean;
    supportsDataDiff?:           boolean;
    supportsDBTExtraction?:      boolean;
    supportsLineageExtraction?:  boolean;
    supportsMetadataExtraction?: boolean;
    supportsProfiler?:           boolean;
    supportsQueryComment?:       boolean;
    supportsUsageExtraction?:    boolean;
    /**
     * Service Type
     */
    type?: ConnectionType;
    /**
     * Optional name to give to the database in OpenMetadata. If left blank, we will use default
     * as the database name.
     */
    databaseName?: string;
    /**
     * Database Schema of the data source. This is optional parameter, if you would like to
     * restrict the metadata reading to a single schema. When left blank, OpenMetadata Ingestion
     * attempts to scan all the schemas.
     *
     * Database Schema of the data source. This is an optional parameter, if you would like to
     * restrict the metadata reading to a single schema. When left blank, OpenMetadata Ingestion
     * attempts to scan all the schemas.
     */
    databaseSchema?: string;
    /**
     * HDB Store User Key generated from the command `hdbuserstore SET <KEY> <host:port>
     * <USERNAME> <PASSWORD>`
     */
    userKey?: string;
    /**
     * How to run the SQLite database. :memory: by default.
     */
    databaseMode?:                  string;
    supportsViewLineageExtraction?: boolean;
    [property: string]: any;
}

/**
 * Choose Auth Config Type.
 *
 * Common Database Connection Config
 *
 * IAM Auth Database Connection Config
 *
 * Azure Database Connection Config
 */
export interface AuthConfigurationType {
    /**
     * Password to connect to source.
     */
    password?:    string;
    awsConfig?:   AWSCredentials;
    azureConfig?: AzureCredentials;
}

/**
 * Authentication provider for the Superset service. For basic user/password authentication,
 * the default value `db` can be used. This parameter is used internally to connect to
 * Superset's REST API.
 */
export enum Provider {
    DB = "db",
    LDAP = "ldap",
}

/**
 * Storage config to store sample data
 */
export interface SampleDataStorageConfig {
    config?: DataStorageConfig;
}

/**
 * Storage config to store sample data
 */
export interface DataStorageConfig {
    /**
     * Bucket Name
     */
    bucketName?: string;
    /**
     * Provide the pattern of the path where the generated sample data file needs to be stored.
     */
    filePathPattern?: string;
    /**
     * When this field enabled a single parquet file will be created to store sample data,
     * otherwise we will create a new file per day
     */
    overwriteData?: boolean;
    /**
     * Prefix of the data source.
     */
    prefix?:        string;
    storageConfig?: AwsCredentials;
    [property: string]: any;
}

/**
 * AWS credentials configs.
 */
export interface AwsCredentials {
    /**
     * The Amazon Resource Name (ARN) of the role to assume. Required Field in case of Assume
     * Role
     */
    assumeRoleArn?: string;
    /**
     * An identifier for the assumed role session. Use the role session name to uniquely
     * identify a session when the same role is assumed by different principals or for different
     * reasons. Required Field in case of Assume Role
     */
    assumeRoleSessionName?: string;
    /**
     * The Amazon Resource Name (ARN) of the role to assume. Optional Field in case of Assume
     * Role
     */
    assumeRoleSourceIdentity?: string;
    /**
     * AWS Access key ID.
     */
    awsAccessKeyId?: string;
    /**
     * AWS Region
     */
    awsRegion?: string;
    /**
     * AWS Secret Access Key.
     */
    awsSecretAccessKey?: string;
    /**
     * AWS Session Token.
     */
    awsSessionToken?: string;
    /**
     * EndPoint URL for the AWS
     */
    endPointURL?: string;
    /**
     * The name of a profile to use with the boto session.
     */
    profileName?: string;
}

/**
 * SQLAlchemy driver scheme options.
 */
export enum ConnectionScheme {
    MysqlPymysql = "mysql+pymysql",
    PgspiderPsycopg2 = "pgspider+psycopg2",
    PostgresqlPsycopg2 = "postgresql+psycopg2",
    SqlitePysqlite = "sqlite+pysqlite",
}

/**
 * Client SSL configuration
 *
 * OpenMetadata Client configured to validate SSL certificates.
 *
 * SSL Configuration details.
 *
 * Schema Registry SSL Config. Configuration for enabling SSL for the Schema Registry
 * connection.
 *
 * SSL Configuration for OpenMetadata Server
 */
export interface ConnectionSSLConfig {
    /**
     * The CA certificate used for SSL validation.
     */
    caCertificate?: string;
    /**
     * The SSL certificate used for client authentication.
     */
    sslCertificate?: string;
    /**
     * The private key associated with the SSL certificate.
     */
    sslKey?: string;
}

/**
 * SSL Mode to connect to database.
 */
export enum SSLMode {
    Allow = "allow",
    Disable = "disable",
    Prefer = "prefer",
    Require = "require",
    VerifyCA = "verify-ca",
    VerifyFull = "verify-full",
}

/**
 * Service Type
 *
 * Service type.
 */
export enum ConnectionType {
    Backend = "Backend",
    MatillionETL = "MatillionETL",
    Mysql = "Mysql",
    Postgres = "Postgres",
    SQLite = "SQLite",
}

/**
 * Client SSL verification. Make sure to configure the SSLConfig if enabled.
 *
 * Flag to verify SSL Certificate for OpenMetadata Server.
 */
export enum VerifySSL {
    Ignore = "ignore",
    NoSSL = "no-ssl",
    Validate = "validate",
}

/**
 * initial Kafka consumer offset
 */
export enum InitialConsumerOffsets {
    Earliest = "earliest",
    Latest = "latest",
}

/**
 * GCP credentials configs.
 *
 * GCP Credentials
 *
 * Azure Cloud Credentials
 *
 * Available sources to fetch metadata.
 *
 * Azure Credentials
 */
export interface GCPCredentials {
    /**
     * We support two ways of authenticating to GCP i.e via GCP Credentials Values or GCP
     * Credentials Path
     */
    gcpConfig?: GCPCredentialsConfiguration;
    /**
     * we enable the authenticated service account to impersonate another service account
     */
    gcpImpersonateServiceAccount?: GCPImpersonateServiceAccountValues;
    /**
     * Account Name of your storage account
     */
    accountName?: string;
    /**
     * Your Service Principal App ID (Client ID)
     */
    clientId?: string;
    /**
     * Your Service Principal Password (Client Secret)
     */
    clientSecret?: string;
    /**
     * Scopes to get access token, for e.g. api://6dfX33ab-XXXX-49df-XXXX-3459eX817d3e/.default
     */
    scopes?: string;
    /**
     * Tenant ID of your Azure Subscription
     */
    tenantId?: string;
    /**
     * Key Vault Name
     */
    vaultName?: string;
}

/**
 * Configuration for Sink Component in the OpenMetadata Ingestion Framework.
 */
export interface ConfigElasticsSearch {
    config?: { [key: string]: any };
    /**
     * Type of sink component ex: metadata
     */
    type: string;
}

/**
 * Credentials to extract the .lkml files from a repository. This is required to get all the
 * lineage and definitions.
 *
 * Do not set any credentials. Note that credentials are required to extract .lkml views and
 * their lineage.
 *
 * Credentials for a GitHub repository
 *
 * Credentials for a BitBucket repository
 *
 * Credentials for a Gitlab repository
 */
export interface GitHubCredentials {
    repositoryName?:  string;
    repositoryOwner?: string;
    token?:           string;
    /**
     * Credentials Type
     */
    type?: GitHubCredentialsType;
    /**
     * Main production branch of the repository. E.g., `main`
     */
    branch?: string;
}

/**
 * Credentials Type
 *
 * GitHub Credentials type
 *
 * BitBucket Credentials type
 *
 * Gitlab Credentials type
 */
export enum GitHubCredentialsType {
    BitBucket = "BitBucket",
    GitHub = "GitHub",
    Gitlab = "Gitlab",
}

/**
 * The authentication method that the user uses to sign in.
 */
export enum IdentityType {
    Anonymous = "ANONYMOUS",
    Iam = "IAM",
    Quicksight = "QUICKSIGHT",
}

/**
 * Specifies the logon authentication method. Possible values are TD2 (the default), JWT,
 * LDAP, KRB5 for Kerberos, or TDNEGO
 */
export enum Logmech {
    Custom = "CUSTOM",
    Jwt = "JWT",
    Krb5 = "KRB5",
    LDAP = "LDAP",
    Td2 = "TD2",
    Tdnego = "TDNEGO",
}

/**
 * Hive Metastore Connection Details
 *
 * Postgres Database Connection Config
 *
 * Mysql Database Connection Config
 */
export interface HiveMetastoreConnectionDetails {
    /**
     * Choose Auth Config Type.
     */
    authType?: AuthConfigurationType;
    /**
     * Custom OpenMetadata Classification name for Postgres policy tags.
     */
    classificationName?:  string;
    connectionArguments?: { [key: string]: any };
    connectionOptions?:   { [key: string]: string };
    /**
     * Database of the data source. This is optional parameter, if you would like to restrict
     * the metadata reading to a single database. When left blank, OpenMetadata Ingestion
     * attempts to scan all the databases.
     */
    database?: string;
    /**
     * Host and port of the source service.
     *
     * Host and port of the MySQL service.
     */
    hostPort?: string;
    /**
     * Ingest data from all databases in Postgres. You can use databaseFilterPattern on top of
     * this.
     */
    ingestAllDatabases?:      boolean;
    sampleDataStorageConfig?: SampleDataStorageConfig;
    /**
     * SQLAlchemy driver scheme options.
     */
    scheme?: HiveMetastoreConnectionDetailsScheme;
    /**
     * SSL Configuration details.
     */
    sslConfig?:                  SchemaRegistrySSLClass;
    sslMode?:                    SSLMode;
    supportsDatabase?:           boolean;
    supportsDataDiff?:           boolean;
    supportsDBTExtraction?:      boolean;
    supportsLineageExtraction?:  boolean;
    supportsMetadataExtraction?: boolean;
    supportsProfiler?:           boolean;
    supportsQueryComment?:       boolean;
    supportsUsageExtraction?:    boolean;
    /**
     * Service Type
     */
    type?: HiveMetastoreConnectionDetailsType;
    /**
     * Username to connect to Postgres. This user should have privileges to read all the
     * metadata in Postgres.
     *
     * Username to connect to MySQL. This user should have privileges to read all the metadata
     * in Mysql.
     */
    username?: string;
    /**
     * Optional name to give to the database in OpenMetadata. If left blank, we will use default
     * as the database name.
     */
    databaseName?: string;
    /**
     * Database Schema of the data source. This is optional parameter, if you would like to
     * restrict the metadata reading to a single schema. When left blank, OpenMetadata Ingestion
     * attempts to scan all the schemas.
     */
    databaseSchema?: string;
}

/**
 * SQLAlchemy driver scheme options.
 */
export enum HiveMetastoreConnectionDetailsScheme {
    MysqlPymysql = "mysql+pymysql",
    PgspiderPsycopg2 = "pgspider+psycopg2",
    PostgresqlPsycopg2 = "postgresql+psycopg2",
}

/**
 * Service Type
 *
 * Service type.
 */
export enum HiveMetastoreConnectionDetailsType {
    Mysql = "Mysql",
    Postgres = "Postgres",
}

/**
 * We support username/password or client certificate authentication
 *
 * username/password auth
 *
 * client certificate auth
 */
export interface NifiCredentialsConfiguration {
    /**
     * Nifi password to authenticate to the API.
     */
    password?: string;
    /**
     * Nifi user to authenticate to the API.
     */
    username?: string;
    /**
     * Boolean marking if we need to verify the SSL certs for Nifi. False by default.
     */
    verifySSL?: boolean;
    /**
     * Path to the root CA certificate
     */
    certificateAuthorityPath?: string;
    /**
     * Path to the client certificate
     */
    clientCertificatePath?: string;
    /**
     * Path to the client key
     */
    clientkeyPath?: string;
}

/**
 * Connect with oracle by either passing service name or database schema name.
 */
export interface OracleConnectionType {
    /**
     * databaseSchema of the data source. This is optional parameter, if you would like to
     * restrict the metadata reading to a single databaseSchema. When left blank, OpenMetadata
     * Ingestion attempts to scan all the databaseSchema.
     */
    databaseSchema?: string;
    /**
     * The Oracle Service name is the TNS alias that you give when you remotely connect to your
     * database.
     */
    oracleServiceName?: string;
    /**
     * Pass the full constructed TNS string, e.g.,
     * (DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=myhost)(PORT=1530)))(CONNECT_DATA=(SID=MYSERVICENAME))).
     */
    oracleTNSConnection?: string;
    [property: string]: any;
}

/**
 * Source to get the .pbit files to extract lineage information
 *
 * Local config source where no extra information needs to be sent.
 *
 * Azure storage config for pbit files
 *
 * GCS storage config for pbit files
 *
 * S3 storage config for pbit files
 */
export interface PowerBIPbitFilesSource {
    /**
     * Directory path for the pbit files
     */
    path?: string;
    /**
     * pbit File Configuration type
     */
    pbitFileConfigType?: PbitFileConfigType;
    /**
     * Path of the folder where the .pbit files will be unzipped and datamodel schema will be
     * extracted
     */
    pbitFilesExtractDir?: string;
    prefixConfig?:        BucketDetails;
    securityConfig?:      SecurityConfigClass;
}

/**
 * pbit File Configuration type
 */
export enum PbitFileConfigType {
    Azure = "azure",
    Gcs = "gcs",
    Local = "local",
    S3 = "s3",
}

/**
 * Details of the bucket where the .pbit files are stored
 */
export interface BucketDetails {
    /**
     * Name of the bucket where the .pbit files are stored
     */
    bucketName?: string;
    /**
     * Path of the folder where the .pbit files are stored
     */
    objectPrefix?: string;
}

/**
 * This schema publisher run modes.
 */
export enum RunMode {
    Batch = "batch",
    Stream = "stream",
}

/**
 * SASL Configuration details.
 *
 * SASL client configuration.
 */
export interface SASLClientConfig {
    /**
     * SASL security mechanism
     */
    saslMechanism?: SaslMechanismType;
    /**
     * The SASL authentication password.
     */
    saslPassword?: string;
    /**
     * The SASL authentication username.
     */
    saslUsername?: string;
}

/**
 * sasl.mechanism Consumer Config property
 *
 * SASL Mechanism consumer config property
 *
 * SASL security mechanism
 */
export enum SaslMechanismType {
    Gssapi = "GSSAPI",
    Oauthbearer = "OAUTHBEARER",
    Plain = "PLAIN",
    ScramSHA256 = "SCRAM-SHA-256",
    ScramSHA512 = "SCRAM-SHA-512",
}

/**
 * Recreate Indexes with updated Language
 *
 * This schema defines the language options available for search index mappings.
 */
export enum SearchIndexMappingLanguage {
    En = "EN",
    Jp = "JP",
    Zh = "ZH",
}

/**
 * Secrets Manager Loader for the Pipeline Service Client.
 *
 * OpenMetadata Secrets Manager Client Loader. Lets the client know how the Secrets Manager
 * Credentials should be loaded from the environment.
 */
export enum SecretsManagerClientLoader {
    Airflow = "airflow",
    Env = "env",
    Noop = "noop",
}

/**
 * Secrets Manager Provider for OpenMetadata Server.
 *
 * OpenMetadata Secrets Manager Provider. Make sure to configure the same secrets manager
 * providers as the ones configured on the OpenMetadata server.
 */
export enum SecretsManagerProvider {
    Aws = "aws",
    AwsSsm = "aws-ssm",
    AzureKv = "azure-kv",
    DB = "db",
    Gcp = "gcp",
    InMemory = "in-memory",
    ManagedAws = "managed-aws",
    ManagedAwsSsm = "managed-aws-ssm",
    ManagedAzureKv = "managed-azure-kv",
}

/**
 * OpenMetadata Client security configuration.
 *
 * openMetadataJWTClientConfig security configs.
 */
export interface OpenMetadataJWTClientConfig {
    /**
     * OpenMetadata generated JWT token.
     */
    jwtToken: string;
}

/**
 * security.protocol consumer config property
 *
 * Kafka security protocol config
 */
export enum KafkaSecurityProtocol {
    Plaintext = "PLAINTEXT",
    SSL = "SSL",
    SaslPlaintext = "SASL_PLAINTEXT",
    SaslSSL = "SASL_SSL",
}

/**
 * Client SSL configuration
 *
 * SSL Configuration details.
 *
 * Schema Registry SSL Config. Configuration for enabling SSL for the Schema Registry
 * connection.
 *
 * SSL Configuration for OpenMetadata Server
 *
 * OpenMetadata Client configured to validate SSL certificates.
 *
 * SSL Config
 */
export interface SSLConfigObject {
    /**
     * The CA certificate used for SSL validation.
     */
    caCertificate?: string;
    /**
     * The SSL certificate used for client authentication.
     */
    sslCertificate?: string;
    /**
     * The private key associated with the SSL certificate.
     */
    sslKey?: string;
    /**
     * SSL Certificates
     */
    certificates?: SSLCertificates;
    [property: string]: any;
}

/**
 * SSL Certificates
 *
 * SSL Configuration details.
 *
 * SSL Certificates By Path
 *
 * SSL Certificates By Values
 */
export interface SSLCertificates {
    /**
     * CA Certificate Path
     */
    caCertPath?: string;
    /**
     * Client Certificate Path
     */
    clientCertPath?: string;
    /**
     * Private Key Path
     */
    privateKeyPath?: string;
    /**
     * CA Certificate Value
     */
    caCertValue?: string;
    /**
     * Client Certificate Value
     */
    clientCertValue?: string;
    /**
     * Private Key Value
     */
    privateKeyValue?: string;
    /**
     * Staging Directory Path
     */
    stagingDir?: string;
}

/**
 * Client SSL/TLS settings.
 */
export enum SSLTLSSettings {
    DisableTLS = "disable-tls",
    IgnoreCertificate = "ignore-certificate",
    ValidateCertificate = "validate-certificate",
}

/**
 * Specifies the transaction mode for the connection
 */
export enum TransactionMode {
    ANSI = "ANSI",
    Default = "DEFAULT",
    Tera = "TERA",
}

/**
 * REST API Type
 *
 * REST API type
 *
 * Service Type
 *
 * Looker service type
 *
 * Metabase service type
 *
 * PowerBI service type
 *
 * PowerBIReportServer service type
 *
 * Redash service type
 *
 * Superset service type
 *
 * Tableau service type
 *
 * Mode service type
 *
 * Custom dashboard service type
 *
 * service type
 *
 * QuickSight service type
 *
 * Qlik sense service type
 *
 * Lightdash service type
 *
 * MicroStrategy service type
 *
 * Qlik Cloud service type
 *
 * Sigma service type
 *
 * Service type.
 *
 * Custom database service type
 *
 * Kafka service type
 *
 * Redpanda service type
 *
 * Custom messaging service type
 *
 * Amundsen service type
 *
 * Metadata to Elastic Search type
 *
 * OpenMetadata service type
 *
 * Custom pipeline service type
 *
 * Custom Ml model service type
 *
 * S3 service type
 *
 * ADLS service type
 *
 * Gcs service type
 *
 * Custom storage service type
 *
 * ElasticSearch Type
 *
 * ElasticSearch service type
 *
 * OpenSearch service type
 *
 * Custom search service type
 */
export enum RESTType {
    Adls = "ADLS",
    Airbyte = "Airbyte",
    Airflow = "Airflow",
    Alation = "Alation",
    AlationSink = "AlationSink",
    Amundsen = "Amundsen",
    Athena = "Athena",
    Atlas = "Atlas",
    AzureSQL = "AzureSQL",
    BigQuery = "BigQuery",
    BigTable = "BigTable",
    Clickhouse = "Clickhouse",
    Couchbase = "Couchbase",
    CustomDashboard = "CustomDashboard",
    CustomDatabase = "CustomDatabase",
    CustomMessaging = "CustomMessaging",
    CustomMlModel = "CustomMlModel",
    CustomPipeline = "CustomPipeline",
    CustomSearch = "CustomSearch",
    CustomStorage = "CustomStorage",
    DBTCloud = "DBTCloud",
    Dagster = "Dagster",
    DataFactory = "DataFactory",
    Databricks = "Databricks",
    DatabricksPipeline = "DatabricksPipeline",
    Datalake = "Datalake",
    Db2 = "Db2",
    DeltaLake = "DeltaLake",
    DomoDashboard = "DomoDashboard",
    DomoDatabase = "DomoDatabase",
    DomoPipeline = "DomoPipeline",
    Doris = "Doris",
    Druid = "Druid",
    DynamoDB = "DynamoDB",
    ElasticSearch = "ElasticSearch",
    Exasol = "Exasol",
    Fivetran = "Fivetran",
    Flink = "Flink",
    Gcs = "GCS",
    Glue = "Glue",
    GluePipeline = "GluePipeline",
    Greenplum = "Greenplum",
    Hive = "Hive",
    Iceberg = "Iceberg",
    Impala = "Impala",
    Kafka = "Kafka",
    KafkaConnect = "KafkaConnect",
    Kinesis = "Kinesis",
    Lightdash = "Lightdash",
    Looker = "Looker",
    MariaDB = "MariaDB",
    Matillion = "Matillion",
    Metabase = "Metabase",
    MetadataES = "MetadataES",
    MicroStrategy = "MicroStrategy",
    Mlflow = "Mlflow",
    Mode = "Mode",
    MongoDB = "MongoDB",
    Mssql = "Mssql",
    Mysql = "Mysql",
    Nifi = "Nifi",
    OpenLineage = "OpenLineage",
    OpenMetadata = "OpenMetadata",
    OpenSearch = "OpenSearch",
    Oracle = "Oracle",
    PinotDB = "PinotDB",
    Postgres = "Postgres",
    PowerBI = "PowerBI",
    PowerBIReportServer = "PowerBIReportServer",
    Presto = "Presto",
    QlikCloud = "QlikCloud",
    QlikSense = "QlikSense",
    QuickSight = "QuickSight",
    REST = "Rest",
    Redash = "Redash",
    Redpanda = "Redpanda",
    Redshift = "Redshift",
    S3 = "S3",
    SAS = "SAS",
    SQLite = "SQLite",
    SageMaker = "SageMaker",
    Salesforce = "Salesforce",
    SapERP = "SapErp",
    SapHana = "SapHana",
    Sigma = "Sigma",
    SingleStore = "SingleStore",
    Sklearn = "Sklearn",
    Snowflake = "Snowflake",
    Spark = "Spark",
    Spline = "Spline",
    Stitch = "Stitch",
    Superset = "Superset",
    Synapse = "Synapse",
    Tableau = "Tableau",
    Teradata = "Teradata",
    Trino = "Trino",
    UnityCatalog = "UnityCatalog",
    VertexAI = "VertexAI",
    Vertica = "Vertica",
}

/**
 * Additional connection configuration.
 */
export interface SourceConfig {
    config?: Pipeline;
}

/**
 * DatabaseService Metadata Pipeline Configuration.
 *
 * DatabaseService Query Usage Pipeline Configuration.
 *
 * DatabaseService Query Lineage Pipeline Configuration.
 *
 * DashboardService Metadata Pipeline Configuration.
 *
 * MessagingService Metadata Pipeline Configuration.
 *
 * DatabaseService Profiler Pipeline Configuration.
 *
 * DatabaseService AutoClassification & Auto Classification Pipeline Configuration.
 *
 * PipelineService Metadata Pipeline Configuration.
 *
 * MlModelService Metadata Pipeline Configuration.
 *
 * StorageService Metadata Pipeline Configuration.
 *
 * SearchService Metadata Pipeline Configuration.
 *
 * TestSuite Pipeline Configuration.
 *
 * Data Insight Pipeline Configuration.
 *
 * DBT Pipeline Configuration.
 *
 * Application Pipeline Configuration.
 *
 * ApiService Metadata Pipeline Configuration.
 */
export interface Pipeline {
    /**
     * Regex to only fetch databases that matches the pattern.
     */
    databaseFilterPattern?: FilterPattern;
    /**
     * Optional configuration to toggle the DDL Statements ingestion.
     */
    includeDDL?: boolean;
    /**
     * Set the 'Include Owners' toggle to control whether to include owners to the ingested
     * entity if the owner email matches with a user stored in the OM server as part of metadata
     * ingestion. If the ingested entity already exists and has an owner, the owner will not be
     * overwritten.
     *
     * Enabling a flag will replace the current owner with a new owner from the source during
     * metadata ingestion, if the current owner is null. It is recommended to keep the flag
     * enabled to obtain the owner information during the first metadata ingestion.
     */
    includeOwners?: boolean;
    /**
     * Optional configuration to toggle the Stored Procedures ingestion.
     */
    includeStoredProcedures?: boolean;
    /**
     * Optional configuration to turn off fetching metadata for tables.
     */
    includeTables?: boolean;
    /**
     * Optional configuration to toggle the tags ingestion.
     */
    includeTags?: boolean;
    /**
     * Optional configuration to turn off fetching metadata for views.
     */
    includeViews?: boolean;
    /**
     * Use incremental Metadata extraction after the first execution. This is commonly done by
     * getting the changes from Audit tables on the supporting databases.
     */
    incremental?: IncrementalMetadataExtractionConfiguration;
    /**
     * Optional configuration to soft delete stored procedures in OpenMetadata if the source
     * stored procedures are deleted. Also, if the stored procedures is deleted, all the
     * associated entities like lineage, etc., with that stored procedures will be deleted
     */
    markDeletedStoredProcedures?: boolean;
    /**
     * This is an optional configuration for enabling soft deletion of tables. When this option
     * is enabled, only tables that have been deleted from the source will be soft deleted, and
     * this will apply solely to the schema that is currently being ingested via the pipeline.
     * Any related entities such as test suites or lineage information that were associated with
     * those tables will also be deleted.
     */
    markDeletedTables?: boolean;
    /**
     * Set the 'Override Metadata' toggle to control whether to override the existing metadata
     * in the OpenMetadata server with the metadata fetched from the source. If the toggle is
     * set to true, the metadata fetched from the source will override the existing metadata in
     * the OpenMetadata server. If the toggle is set to false, the metadata fetched from the
     * source will not override the existing metadata in the OpenMetadata server. This is
     * applicable for fields like description, tags, owner and displayName
     */
    overrideMetadata?: boolean;
    /**
     * Configuration to tune how far we want to look back in query logs to process Stored
     * Procedures results.
     *
     * Configuration to tune how far we want to look back in query logs to process usage data.
     *
     * Configuration to tune how far we want to look back in query logs to process lineage data.
     */
    queryLogDuration?: number;
    /**
     * Configuration to set the timeout for parsing the query in seconds.
     */
    queryParsingTimeoutLimit?: number;
    /**
     * Regex to only fetch tables or databases that matches the pattern.
     */
    schemaFilterPattern?: FilterPattern;
    /**
     * Regex exclude tables or databases that matches the pattern.
     */
    tableFilterPattern?: FilterPattern;
    /**
     * Number of Threads to use in order to parallelize Table ingestion.
     *
     * Number of Threads to use in order to parallelize lineage ingestion.
     */
    threads?: number;
    /**
     * Pipeline type
     */
    type?: ConfigType;
    /**
     * Regex will be applied on fully qualified name (e.g
     * service_name.db_name.schema_name.table_name) instead of raw name (e.g. table_name)
     */
    useFqnForFiltering?: boolean;
    /**
     * Configuration the condition to filter the query history.
     */
    filterCondition?: string;
    /**
     * Configuration to set the file path for query logs
     */
    queryLogFilePath?: string;
    /**
     * Configuration to set the limit for query logs
     */
    resultLimit?: number;
    /**
     * Temporary file name to store the query logs before processing. Absolute file path
     * required.
     */
    stageFileLocation?: string;
    /**
     * Set the 'Override View Lineage' toggle to control whether to override the existing view
     * lineage.
     */
    overrideViewLineage?: boolean;
    /**
     * Configuration to set the timeout for parsing the query in seconds.
     */
    parsingTimeoutLimit?: number;
    /**
     * Set the 'Process Query Lineage' toggle to control whether to process query lineage.
     */
    processQueryLineage?: boolean;
    /**
     * Set the 'Process Stored ProcedureLog Lineage' toggle to control whether to process stored
     * procedure lineage.
     */
    processStoredProcedureLineage?: boolean;
    /**
     * Set the 'Process View Lineage' toggle to control whether to process view lineage.
     */
    processViewLineage?: boolean;
    /**
     * Regex exclude or include charts that matches the pattern.
     */
    chartFilterPattern?: FilterPattern;
    /**
     * Regex to exclude or include dashboards that matches the pattern.
     */
    dashboardFilterPattern?: FilterPattern;
    /**
     * Regex exclude or include data models that matches the pattern.
     */
    dataModelFilterPattern?: FilterPattern;
    /**
     * Optional configuration to toggle the ingestion of data models.
     */
    includeDataModels?: boolean;
    /**
     * Optional Configuration to include/exclude draft dashboards. By default it will include
     * draft dashboards
     */
    includeDraftDashboard?: boolean;
    /**
     * Details required to generate Lineage
     */
    lineageInformation?: LineageInformation;
    /**
     * Optional configuration to soft delete dashboards in OpenMetadata if the source dashboards
     * are deleted. Also, if the dashboard is deleted, all the associated entities like lineage,
     * etc., with that dashboard will be deleted
     */
    markDeletedDashboards?: boolean;
    /**
     * Optional configuration to soft delete data models in OpenMetadata if the source data
     * models are deleted. Also, if the data models is deleted, all the associated entities like
     * lineage, etc., with that data models will be deleted
     */
    markDeletedDataModels?: boolean;
    /**
     * Set the 'Override Lineage' toggle to control whether to override the existing lineage.
     */
    overrideLineage?: boolean;
    /**
     * Regex to exclude or include projects that matches the pattern.
     */
    projectFilterPattern?: FilterPattern;
    /**
     * Option to turn on/off generating sample data during metadata extraction.
     */
    generateSampleData?: boolean;
    /**
     * Optional configuration to soft delete topics in OpenMetadata if the source topics are
     * deleted. Also, if the topic is deleted, all the associated entities like sample data,
     * lineage, etc., with that topic will be deleted
     */
    markDeletedTopics?: boolean;
    /**
     * Regex to only fetch topics that matches the pattern.
     */
    topicFilterPattern?: FilterPattern;
    /**
     * Regex to only compute metrics for table that matches the given tag, tiers, gloassary
     * pattern.
     */
    classificationFilterPattern?: FilterPattern;
    /**
     * Option to turn on/off column metric computation. If enabled, profiler will compute column
     * level metrics.
     */
    computeColumnMetrics?: boolean;
    /**
     * Option to turn on/off computing profiler metrics.
     */
    computeMetrics?: boolean;
    /**
     * Option to turn on/off table metric computation. If enabled, profiler will compute table
     * level metrics.
     */
    computeTableMetrics?: boolean;
    /**
     * Percentage of data or no. of rows used to compute the profiler metrics and run data
     * quality tests
     *
     * Percentage of data or no. of rows we want to execute the profiler and tests on
     */
    profileSample?:     number;
    profileSampleType?: ProfileSampleType;
    /**
     * Number of sample rows to ingest when 'Generate Sample Data' is enabled
     */
    sampleDataCount?:    number;
    samplingMethodType?: SamplingMethodType;
    /**
     * Number of threads to use during metric computations
     */
    threadCount?: number;
    /**
     * Profiler Timeout in Seconds
     */
    timeoutSeconds?: number;
    /**
     * Use system tables to extract metrics. Metrics that cannot be gathered from system tables
     * will use the default methods. Using system tables can be faster but requires gathering
     * statistics before running (for example using the ANALYZE procedure). More information can
     * be found in the documentation: https://docs.openmetadata.org/latest/profler
     */
    useStatistics?: boolean;
    /**
     * Set the Confidence value for which you want the column to be tagged as PII. Confidence
     * value ranges from 0 to 100. A higher number will yield less false positives but more
     * false negatives. A lower number will yield more false positives but less false negatives.
     */
    confidence?: number;
    /**
     * Optional configuration to automatically tag columns that might contain sensitive
     * information
     */
    enableAutoClassification?: boolean;
    /**
     * Option to turn on/off storing sample data. If enabled, we will ingest sample data for
     * each table.
     */
    storeSampleData?: boolean;
    /**
     * Optional configuration to turn off fetching lineage from pipelines.
     */
    includeLineage?: boolean;
    /**
     * Optional configuration to toggle whether the un-deployed pipelines should be ingested or
     * not. If set to false, only deployed pipelines will be ingested.
     */
    includeUnDeployedPipelines?: boolean;
    /**
     * Optional configuration to soft delete Pipelines in OpenMetadata if the source Pipelines
     * are deleted. Also, if the Pipeline is deleted, all the associated entities like lineage,
     * etc., with that Pipeline will be deleted
     */
    markDeletedPipelines?: boolean;
    /**
     * Regex exclude pipelines.
     */
    pipelineFilterPattern?: FilterPattern;
    /**
     * Optional configuration to soft delete MlModels in OpenMetadata if the source MlModels are
     * deleted. Also, if the MlModel is deleted, all the associated entities like lineage, etc.,
     * with that MlModels will be deleted
     */
    markDeletedMlModels?: boolean;
    /**
     * Regex to only fetch MlModels with names matching the pattern.
     */
    mlModelFilterPattern?: FilterPattern;
    /**
     * Regex to only fetch containers that matches the pattern.
     */
    containerFilterPattern?: FilterPattern;
    /**
     * Optional configuration to soft delete containers in OpenMetadata if the source containers
     * are deleted. Also, if the topic is deleted, all the associated entities with that
     * containers will be deleted
     */
    markDeletedContainers?:       boolean;
    storageMetadataConfigSource?: StorageMetadataConfigurationSource;
    /**
     * Enable the 'Include Index Template' toggle to manage the ingestion of index template data.
     */
    includeIndexTemplate?: boolean;
    /**
     * Optional configuration to turn off fetching sample data for search index.
     */
    includeSampleData?: boolean;
    /**
     * Optional configuration to soft delete search indexes in OpenMetadata if the source search
     * indexes are deleted. Also, if the search index is deleted, all the associated entities
     * like lineage, etc., with that search index will be deleted
     */
    markDeletedSearchIndexes?: boolean;
    /**
     * No. of records of sample data we want to ingest.
     */
    sampleSize?: number;
    /**
     * Regex to only fetch search indexes that matches the pattern.
     */
    searchIndexFilterPattern?: FilterPattern;
    /**
     * Fully qualified name of the entity to be tested.
     */
    entityFullyQualifiedName?: string;
    /**
     * List of test cases to be executed on the entity. If null, all test cases will be executed.
     */
    testCases?: string[];
    /**
     * Maximum number of events entities in a batch (Default 1000).
     */
    batchSize?: number;
    /**
     * Certificate path to be added in configuration. The path should be local in the Ingestion
     * Container.
     */
    caCerts?:       string;
    recreateIndex?: boolean;
    /**
     * Region name. Required when using AWS Credentials.
     */
    regionName?: string;
    /**
     * Recreate Indexes with updated Language
     */
    searchIndexMappingLanguage?: SearchIndexMappingLanguage;
    /**
     * Connection Timeout
     */
    timeout?: number;
    /**
     * Indicates whether to use aws credentials when connecting to OpenSearch in AWS.
     */
    useAwsCredentials?: boolean;
    /**
     * Indicates whether to use SSL when connecting to ElasticSearch. By default, we will ignore
     * SSL settings.
     */
    useSSL?: boolean;
    /**
     * Indicates whether to verify certificates when using SSL connection to ElasticSearch.
     * Ignored by default. Is set to true, make sure to send the certificates in the property
     * `CA Certificates`.
     */
    verifyCerts?: boolean;
    /**
     * Custom OpenMetadata Classification name for dbt tags.
     */
    dbtClassificationName?: string;
    /**
     * Available sources to fetch DBT catalog and manifest files.
     */
    dbtConfigSource?: DBTConfigurationSource;
    /**
     * Optional configuration to update the description from DBT or not
     */
    dbtUpdateDescriptions?: boolean;
    /**
     * Application configuration
     */
    appConfig?: any[] | boolean | CollateAIAppConfig | number | null | string;
    /**
     * Application private configuration
     */
    appPrivateConfig?: PrivateConfig;
    /**
     * Source Python Class Name to run the application
     */
    sourcePythonClass?: string;
    /**
     * Regex to only fetch api collections with names matching the pattern.
     */
    apiCollectionFilterPattern?: FilterPattern;
    /**
     * Optional configuration to soft delete api collections in OpenMetadata if the source
     * collections are deleted. Also, if the collection is deleted, all the associated entities
     * like endpoints, etc., with that collection will be deleted
     */
    markDeletedApiCollections?: boolean;
}

/**
 * Regex to only fetch databases that matches the pattern.
 *
 * Regex to only fetch dashboards or charts that matches the pattern.
 *
 * Regex to only fetch tables or databases that matches the pattern.
 *
 * Regex exclude tables or databases that matches the pattern.
 *
 * Regex exclude or include charts that matches the pattern.
 *
 * Regex to exclude or include dashboards that matches the pattern.
 *
 * Regex exclude or include data models that matches the pattern.
 *
 * Regex to exclude or include projects that matches the pattern.
 *
 * Regex to only fetch topics that matches the pattern.
 *
 * Regex to only compute metrics for table that matches the given tag, tiers, gloassary
 * pattern.
 *
 * Regex exclude pipelines.
 *
 * Regex to only fetch MlModels with names matching the pattern.
 *
 * Regex to only fetch containers that matches the pattern.
 *
 * Regex to only fetch search indexes that matches the pattern.
 *
 * Regex to only fetch api collections with names matching the pattern.
 */
export interface FilterPattern {
    /**
     * List of strings/regex patterns to match and exclude only database entities that match.
     */
    excludes?: string[];
    /**
     * List of strings/regex patterns to match and include only database entities that match.
     */
    includes?: string[];
}

/**
 * Configuration for the CollateAI External Application.
 *
 * Configuration for the Automator External Application.
 *
 * No configuration needed to instantiate the Data Insights Pipeline. The logic is handled
 * in the backend.
 *
 * Search Indexing App.
 *
 * This schema defines the Slack App Token Configuration
 */
export interface CollateAIAppConfig {
    /**
     * Query filter to be passed to ES. E.g.,
     * `{"query":{"bool":{"must":[{"bool":{"should":[{"term":{"domain.displayName.keyword":"DG
     * Anim"}}]}}]}}}`. This is the same payload as in the Explore page.
     */
    filter?: string;
    /**
     * Patch the description if it is empty, instead of raising a suggestion
     */
    patchIfEmpty?: boolean;
    /**
     * Application Type
     */
    type?: CollateAIAppConfigType;
    /**
     * Action to take on those entities. E.g., propagate description through lineage, auto
     * tagging, etc.
     */
    actions?: Action[];
    /**
     * Entities selected to run the automation.
     */
    resources?:             Resource;
    backfillConfiguration?: BackfillConfiguration;
    /**
     * Maximum number of events processed at a time (Default 100).
     *
     * Maximum number of events sent in a batch (Default 100).
     */
    batchSize?: number;
    /**
     * Recreates the DataAssets index on DataInsights. Useful if you changed a Custom Property
     * Type and are facing errors. Bear in mind that recreating the index will delete your
     * DataAssets and a backfill will be needed.
     */
    recreateDataAssetsIndex?: boolean;
    sendToAdmins?:            boolean;
    sendToTeams?:             boolean;
    /**
     * Number of threads to use for reindexing
     */
    consumerThreads?: number;
    /**
     * List of Entities to Reindex
     */
    entities?: string[];
    /**
     * Initial backoff time in milliseconds
     */
    initialBackoff?: number;
    /**
     * Maximum backoff time in milliseconds
     */
    maxBackoff?: number;
    /**
     * Maximum number of concurrent requests to the search index
     */
    maxConcurrentRequests?: number;
    /**
     * Maximum number of retries for a failed request
     */
    maxRetries?: number;
    /**
     * Maximum number of events sent in a batch (Default 100).
     */
    payLoadSize?: number;
    /**
     * Number of threads to use for reindexing
     */
    producerThreads?: number;
    /**
     * Queue Size to user internally for reindexing.
     */
    queueSize?: number;
    /**
     * This schema publisher run modes.
     */
    recreateIndex?: boolean;
    /**
     * Recreate Indexes with updated Language
     */
    searchIndexMappingLanguage?: SearchIndexMappingLanguage;
    /**
     * Bot Token
     */
    botToken?: string;
    /**
     * User Token
     */
    userToken?: string;
}

/**
 * Action to take on those entities. E.g., propagate description through lineage, auto
 * tagging, etc.
 *
 * Apply Tags to the selected assets.
 *
 * Remove Tags Action Type
 *
 * Add an owner to the selected assets.
 *
 * Remove Owner Action Type
 *
 * Add owners to the selected assets.
 *
 * Propagate description, tags and glossary terms via lineage
 *
 * ML Tagging action configuration for external automator.
 */
export interface Action {
    /**
     * Apply tags to the children of the selected assets that match the criteria. E.g., columns,
     * tasks, topic fields,...
     *
     * Remove tags from all the children of the selected assets. E.g., columns, tasks, topic
     * fields,...
     *
     * Apply the description to the children of the selected assets that match the criteria.
     * E.g., columns, tasks, topic fields,...
     *
     * Remove descriptions from all children of the selected assets. E.g., columns, tasks, topic
     * fields,...
     */
    applyToChildren?: string[];
    /**
     * Update tags even if they are already defined in the asset. By default, incoming tags are
     * merged with the existing ones.
     *
     * Update the domain even if it is defined in the asset. By default, we will only apply the
     * domain to assets without domain.
     *
     * Update the description even if they are already defined in the asset. By default, we'll
     * only add the descriptions to assets without the description set.
     *
     * Update the tier even if it is defined in the asset. By default, we will only apply the
     * tier to assets without tier.
     *
     * Update the owners even if it is defined in the asset. By default, we will only apply the
     * owners to assets without owner.
     *
     * Update descriptions, tags and Glossary Terms via lineage even if they are already defined
     * in the asset. By default, descriptions are only updated if they are not already defined
     * in the asset, and incoming tags are merged with the existing ones.
     */
    overwriteMetadata?: boolean;
    /**
     * Tags to apply
     *
     * Tags to remove
     */
    tags?: TagLabel[];
    /**
     * Application Type
     */
    type: ActionType;
    /**
     * Domain to apply
     */
    domain?: EntityReference;
    /**
     * Description to apply
     */
    description?: string;
    /**
     * tier to apply
     */
    tier?: TagLabel;
    /**
     * Owners to apply
     */
    owners?: EntityReference[];
    /**
     * Propagate the metadata to columns via column-level lineage.
     */
    propagateColumnLevel?: boolean;
    /**
     * Propagate description through lineage
     */
    propagateDescription?: boolean;
    /**
     * Propagate glossary terms through lineage
     */
    propagateGlossaryTerms?: boolean;
    /**
     * Propagate owner from the parent
     */
    propagateOwner?: boolean;
    /**
     * Propagate the metadata to the parents (e.g., tables) via lineage.
     */
    propagateParent?: boolean;
    /**
     * Propagate tags through lineage
     */
    propagateTags?: boolean;
    /**
     * Propagate tier from the parent
     */
    propagateTier?: boolean;
}

/**
 * Domain to apply
 *
 * This schema defines the EntityReference type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
 *
 * Owners to apply
 *
 * This schema defines the EntityReferenceList type used for referencing an entity.
 * EntityReference is used for capturing relationships from one entity to another. For
 * example, a table has an attribute called database of type EntityReference that captures
 * the relationship of a table `belongs to a` database.
 */
export interface EntityReference {
    /**
     * If true the entity referred to has been soft-deleted.
     */
    deleted?: boolean;
    /**
     * Optional description of entity.
     */
    description?: string;
    /**
     * Display Name that identifies this entity.
     */
    displayName?: string;
    /**
     * Fully qualified name of the entity instance. For entities such as tables, databases
     * fullyQualifiedName is returned in this field. For entities that don't have name hierarchy
     * such as `user` and `team` this will be same as the `name` field.
     */
    fullyQualifiedName?: string;
    /**
     * Link to the entity resource.
     */
    href?: string;
    /**
     * Unique identifier that identifies an entity instance.
     */
    id: string;
    /**
     * If true the relationship indicated by this entity reference is inherited from the parent
     * entity.
     */
    inherited?: boolean;
    /**
     * Name of the entity instance.
     */
    name?: string;
    /**
     * Entity type/class name - Examples: `database`, `table`, `metrics`, `databaseService`,
     * `dashboardService`...
     */
    type: string;
}

/**
 * This schema defines the type for labeling an entity with a Tag.
 *
 * tier to apply
 */
export interface TagLabel {
    /**
     * Description for the tag label.
     */
    description?: string;
    /**
     * Display Name that identifies this tag.
     */
    displayName?: string;
    /**
     * Link to the tag resource.
     */
    href?: string;
    /**
     * Label type describes how a tag label was applied. 'Manual' indicates the tag label was
     * applied by a person. 'Derived' indicates a tag label was derived using the associated tag
     * relationship (see Classification.json for more details). 'Propagated` indicates a tag
     * label was propagated from upstream based on lineage. 'Automated' is used when a tool was
     * used to determine the tag label.
     */
    labelType: LabelType;
    /**
     * Name of the tag or glossary term.
     */
    name?: string;
    /**
     * Label is from Tags or Glossary.
     */
    source: TagSource;
    /**
     * 'Suggested' state is used when a tag label is suggested by users or tools. Owner of the
     * entity must confirm the suggested labels before it is marked as 'Confirmed'.
     */
    state:  State;
    style?: Style;
    tagFQN: string;
}

/**
 * Label type describes how a tag label was applied. 'Manual' indicates the tag label was
 * applied by a person. 'Derived' indicates a tag label was derived using the associated tag
 * relationship (see Classification.json for more details). 'Propagated` indicates a tag
 * label was propagated from upstream based on lineage. 'Automated' is used when a tool was
 * used to determine the tag label.
 */
export enum LabelType {
    Automated = "Automated",
    Derived = "Derived",
    Manual = "Manual",
    Propagated = "Propagated",
}

/**
 * Label is from Tags or Glossary.
 */
export enum TagSource {
    Classification = "Classification",
    Glossary = "Glossary",
}

/**
 * 'Suggested' state is used when a tag label is suggested by users or tools. Owner of the
 * entity must confirm the suggested labels before it is marked as 'Confirmed'.
 */
export enum State {
    Confirmed = "Confirmed",
    Suggested = "Suggested",
}

/**
 * UI Style is used to associate a color code and/or icon to entity to customize the look of
 * that entity in UI.
 */
export interface Style {
    /**
     * Hex Color Code to mark an entity such as GlossaryTerm, Tag, Domain or Data Product.
     */
    color?: string;
    /**
     * An icon to associate with GlossaryTerm, Tag, Domain or Data Product.
     */
    iconURL?: string;
}

/**
 * Application Type
 *
 * Add Tags action type.
 *
 * Remove Tags Action Type.
 *
 * Add Owner Action Type.
 *
 * Remove Domain Action Type
 *
 * Add Description Action Type.
 *
 * Remove Description Action Type
 *
 * Add Tier Action Type.
 *
 * Remove Tier Action Type
 *
 * Remove Owner Action Type
 *
 * Lineage propagation action type.
 *
 * ML PII Tagging action type.
 */
export enum ActionType {
    AddDescriptionAction = "AddDescriptionAction",
    AddDomainAction = "AddDomainAction",
    AddOwnerAction = "AddOwnerAction",
    AddTagsAction = "AddTagsAction",
    AddTierAction = "AddTierAction",
    LineagePropagationAction = "LineagePropagationAction",
    MLTaggingAction = "MLTaggingAction",
    RemoveDescriptionAction = "RemoveDescriptionAction",
    RemoveDomainAction = "RemoveDomainAction",
    RemoveOwnerAction = "RemoveOwnerAction",
    RemoveTagsAction = "RemoveTagsAction",
    RemoveTierAction = "RemoveTierAction",
}

/**
 * Backfill Configuration
 */
export interface BackfillConfiguration {
    /**
     * Enable Backfill for the configured dates
     */
    enabled?: boolean;
    /**
     * Date for which the backfill will end
     */
    endDate?: Date;
    /**
     * Date from which to start the backfill
     */
    startDate?: Date;
    [property: string]: any;
}

/**
 * Entities selected to run the automation.
 */
export interface Resource {
    /**
     * Query filter to be passed to ES. E.g.,
     * `{"query":{"bool":{"must":[{"bool":{"should":[{"term":{"domain.displayName.keyword":"DG
     * Anim"}}]}}]}}}`. This is the same payload as in the Explore page.
     */
    queryFilter?: string;
    /**
     * Type of the entity. E.g., 'table', 'chart',...
     */
    type?: string[];
    [property: string]: any;
}

/**
 * Application Type
 *
 * Application type.
 */
export enum CollateAIAppConfigType {
    Automator = "Automator",
    CollateAI = "CollateAI",
    DataInsights = "DataInsights",
    DataInsightsReport = "DataInsightsReport",
    SearchIndexing = "SearchIndexing",
}

/**
 * Application private configuration
 *
 * PRivate Configuration for the CollateAI External Application.
 */
export interface PrivateConfig {
    /**
     * Collate Server public URL. WAII will use this information to interact with the server.
     * E.g., https://sandbox.getcollate.io
     */
    collateURL: string;
    /**
     * Limits for the CollateAI Application.
     */
    limits: CollateAILimits;
    /**
     * WAII API Token
     */
    token: string;
    /**
     * WAII API host URL
     */
    waiiInstance: string;
}

/**
 * Limits for the CollateAI Application.
 */
export interface CollateAILimits {
    /**
     * Start of the billing cycle.
     */
    billingCycleStart?: Date;
    /**
     * Maximum number of descriptions generated by the CollateAI
     */
    descriptions?: number;
    /**
     * Maximum number of queries generated by CollateAI.
     */
    queries?: number;
    [property: string]: any;
}

/**
 * Available sources to fetch DBT catalog and manifest files.
 *
 * dbt Cloud configuration.
 *
 * DBT Catalog, Manifest and Run Results file path config.
 *
 * DBT Catalog, Manifest and Run Results HTTP path configuration.
 *
 * DBT Catalog, Manifest and Run Results files in S3 bucket. We will search for
 * catalog.json, manifest.json and run_results.json.
 *
 * DBT Catalog, Manifest and Run Results files in GCS storage. We will search for
 * catalog.json, manifest.json and run_results.json.
 *
 * DBT Catalog, Manifest and Run Results files in Azure bucket. We will search for
 * catalog.json, manifest.json and run_results.json.
 */
export interface DBTConfigurationSource {
    /**
     * dbt cloud account Id
     */
    dbtCloudAccountId?: string;
    /**
     * dbt cloud account authentication token
     */
    dbtCloudAuthToken?: string;
    /**
     * dbt cloud job id.
     */
    dbtCloudJobId?: string;
    /**
     * In case of multiple projects in a dbt cloud account, specify the project's id from which
     * you want to extract the dbt run artifacts
     */
    dbtCloudProjectId?: string;
    /**
     * URL to connect to your dbt cloud instance. E.g., https://cloud.getdbt.com or
     * https://emea.dbt.com/
     */
    dbtCloudUrl?: string;
    /**
     * dbt Configuration type
     */
    dbtConfigType: DbtConfigType;
    /**
     * DBT catalog file path to extract dbt models with their column schemas.
     */
    dbtCatalogFilePath?: string;
    /**
     * DBT manifest file path to extract dbt models and associate with tables.
     */
    dbtManifestFilePath?: string;
    /**
     * DBT run results file path to extract the test results information.
     */
    dbtRunResultsFilePath?: string;
    /**
     * DBT sources file path to extract the freshness test result.
     */
    dbtSourcesFilePath?: string;
    /**
     * DBT catalog http file path to extract dbt models with their column schemas.
     */
    dbtCatalogHttpPath?: string;
    /**
     * DBT manifest http file path to extract dbt models and associate with tables.
     */
    dbtManifestHttpPath?: string;
    /**
     * DBT run results http file path to extract the test results information.
     */
    dbtRunResultsHttpPath?: string;
    /**
     * DBT sources http file path to extract freshness test results information.
     */
    dbtSourcesHttpPath?: string;
    /**
     * Details of the bucket where the dbt files are stored
     */
    dbtPrefixConfig?:   DBTPrefixConfig;
    dbtSecurityConfig?: SecurityConfigClass;
}

/**
 * dbt Configuration type
 */
export enum DbtConfigType {
    Azure = "azure",
    Cloud = "cloud",
    Gcs = "gcs",
    HTTP = "http",
    Local = "local",
    S3 = "s3",
}

/**
 * Details of the bucket where the dbt files are stored
 */
export interface DBTPrefixConfig {
    /**
     * Name of the bucket where the dbt files are stored
     */
    dbtBucketName?: string;
    /**
     * Path of the folder where the dbt files are stored
     */
    dbtObjectPrefix?: string;
}

/**
 * Use incremental Metadata extraction after the first execution. This is commonly done by
 * getting the changes from Audit tables on the supporting databases.
 */
export interface IncrementalMetadataExtractionConfiguration {
    /**
     * If True, enables Metadata Extraction to be incremental
     */
    enabled: boolean;
    /**
     * Number os days to search back for a successful pipeline run. The timestamp of the last
     * found successful pipeline run will be used as a base to search for updated entities.
     */
    lookbackDays?: number;
    /**
     * Number of days to add to the last successful pipeline run timestamp to search for updated
     * entities.
     */
    safetyMarginDays?: number;
}

/**
 * Details required to generate Lineage
 */
export interface LineageInformation {
    /**
     * List of Database Service Names for creation of lineage
     */
    dbServiceNames?: string[];
    /**
     * List of Storage Service Names for creation of lineage
     */
    storageServiceNames?: string[];
    [property: string]: any;
}

/**
 * Type of Profile Sample (percentage or rows)
 */
export enum ProfileSampleType {
    Percentage = "PERCENTAGE",
    Rows = "ROWS",
}

/**
 * Type of Sampling Method (BERNOULLI or SYSTEM)
 */
export enum SamplingMethodType {
    Bernoulli = "BERNOULLI",
    System = "SYSTEM",
}

/**
 * No manifest file available. Ingestion would look for bucket-level metadata file instead
 *
 * Storage Metadata Manifest file path config.
 *
 * Storage Metadata Manifest file HTTP path config.
 *
 * Storage Metadata Manifest file S3 path config.
 *
 * Storage Metadata Manifest file ADLS path config.
 *
 * Storage Metadata Manifest file GCS path config.
 */
export interface StorageMetadataConfigurationSource {
    /**
     * Storage Metadata manifest file path to extract locations to ingest from.
     */
    manifestFilePath?: string;
    /**
     * Storage Metadata manifest http file path to extract locations to ingest from.
     */
    manifestHttpPath?: string;
    prefixConfig?:     StorageMetadataBucketDetails;
    securityConfig?:   SecurityConfigClass;
}

/**
 * Details of the bucket where the storage metadata manifest file is stored
 */
export interface StorageMetadataBucketDetails {
    /**
     * Name of the top level container where the storage metadata file is stored
     */
    containerName: string;
    /**
     * Path of the folder where the storage metadata file is stored. If the file is at the root,
     * you can keep it empty.
     */
    objectPrefix?: string;
}

/**
 * Pipeline type
 *
 * Database Source Config Metadata Pipeline type
 *
 * Database Source Config Usage Pipeline type
 *
 * Dashboard Source Config Metadata Pipeline type
 *
 * Messaging Source Config Metadata Pipeline type
 *
 * Profiler Source Config Pipeline type
 *
 * Pipeline Source Config Metadata Pipeline type
 *
 * MlModel Source Config Metadata Pipeline type
 *
 * Object Store Source Config Metadata Pipeline type
 *
 * Search Source Config Metadata Pipeline type
 *
 * DBT Config Pipeline type
 *
 * Pipeline Source Config For Application Pipeline type. Nothing is required.
 *
 * Api Source Config Metadata Pipeline type
 */
export enum ConfigType {
    APIMetadata = "ApiMetadata",
    Application = "Application",
    AutoClassification = "AutoClassification",
    DashboardMetadata = "DashboardMetadata",
    DataInsight = "dataInsight",
    DatabaseLineage = "DatabaseLineage",
    DatabaseMetadata = "DatabaseMetadata",
    DatabaseUsage = "DatabaseUsage",
    Dbt = "DBT",
    MessagingMetadata = "MessagingMetadata",
    MetadataToElasticSearch = "MetadataToElasticSearch",
    MlModelMetadata = "MlModelMetadata",
    PipelineMetadata = "PipelineMetadata",
    Profiler = "Profiler",
    SearchMetadata = "SearchMetadata",
    StorageMetadata = "StorageMetadata",
    TestSuite = "TestSuite",
}

/**
 * Configuration for Stage Component in the OpenMetadata Ingestion Framework.
 */
export interface Stage {
    config?: { [key: string]: any };
    /**
     * Type of stage component ex: table-usage
     */
    type: string;
}

/**
 * Configuration for the entire Ingestion Workflow.
 */
export interface WorkflowConfig {
    config?:                  { [key: string]: any };
    loggerLevel?:             LogLevels;
    openMetadataServerConfig: OpenMetadataConnection;
    /**
     * The percentage of successfully processed records that must be achieved for the pipeline
     * to be considered successful. Otherwise, the pipeline will be marked as failed.
     */
    successThreshold?: number;
}

/**
 * Supported logging levels
 */
export enum LogLevels {
    Debug = "DEBUG",
    Error = "ERROR",
    Info = "INFO",
    Warn = "WARN",
}

/**
 * OpenMetadata Connection Config
 */
export interface OpenMetadataConnection {
    /**
     * OpenMetadata server API version to use.
     */
    apiVersion?: string;
    /**
     * OpenMetadata Server Authentication Provider.
     */
    authProvider?: AuthProvider;
    /**
     * Cluster name to differentiate OpenMetadata Server instance
     */
    clusterName?: string;
    /**
     * Configuration for Sink Component in the OpenMetadata Ingestion Framework.
     */
    elasticsSearch?: OpenMetadataServerConfigElasticsSearch;
    /**
     * Validate Openmetadata Server & Client Version.
     */
    enableVersionValidation?: boolean;
    extraHeaders?:            { [key: string]: string };
    /**
     * Force the overwriting of any entity during the ingestion.
     */
    forceEntityOverwriting?: boolean;
    /**
     * OpenMetadata Server Config. Must include API end point ex: http://localhost:8585/api
     */
    hostPort: string;
    /**
     * Include Dashboards for Indexing
     */
    includeDashboards?: boolean;
    /**
     * Include Database Services for Indexing
     */
    includeDatabaseServices?: boolean;
    /**
     * Include Glossary Terms for Indexing
     */
    includeGlossaryTerms?: boolean;
    /**
     * Include Messaging Services for Indexing
     */
    includeMessagingServices?: boolean;
    /**
     * Include MlModels for Indexing
     */
    includeMlModels?: boolean;
    /**
     * Include Pipelines for Indexing
     */
    includePipelines?: boolean;
    /**
     * Include Pipeline Services for Indexing
     */
    includePipelineServices?: boolean;
    /**
     * Include Tags for Policy
     */
    includePolicy?: boolean;
    /**
     * Include Tables for Indexing
     */
    includeTables?: boolean;
    /**
     * Include Tags for Indexing
     */
    includeTags?: boolean;
    /**
     * Include Teams for Indexing
     */
    includeTeams?: boolean;
    /**
     * Include Topics for Indexing
     */
    includeTopics?: boolean;
    /**
     * Include Users for Indexing
     */
    includeUsers?: boolean;
    /**
     * Limit the number of records for Indexing.
     */
    limitRecords?: number;
    /**
     * Secrets Manager Loader for the Pipeline Service Client.
     */
    secretsManagerLoader?: SecretsManagerClientLoader;
    /**
     * Secrets Manager Provider for OpenMetadata Server.
     */
    secretsManagerProvider?: SecretsManagerProvider;
    /**
     * OpenMetadata Client security configuration.
     */
    securityConfig?: OpenMetadataJWTClientConfig;
    /**
     * SSL Configuration for OpenMetadata Server
     */
    sslConfig?: SchemaRegistrySSLClass;
    /**
     * If set to true, when creating a service during the ingestion we will store its Service
     * Connection. Otherwise, the ingestion will create a bare service without connection
     * details.
     */
    storeServiceConnection?: boolean;
    /**
     * Flag to enable Data Insight Extraction
     */
    supportsDataInsightExtraction?: boolean;
    /**
     * Flag to enable ElasticSearch Reindexing Extraction
     */
    supportsElasticSearchReindexingExtraction?: boolean;
    /**
     * Service Type
     */
    type?: OpenmetadataType;
    /**
     * Flag to verify SSL Certificate for OpenMetadata Server.
     */
    verifySSL?: VerifySSL;
}

/**
 * Configuration for Sink Component in the OpenMetadata Ingestion Framework.
 */
export interface OpenMetadataServerConfigElasticsSearch {
    config?: { [key: string]: any };
    /**
     * Type of sink component ex: metadata
     */
    type: string;
}

/**
 * Service Type
 *
 * OpenMetadata service type
 */
export enum OpenmetadataType {
    OpenMetadata = "OpenMetadata",
}
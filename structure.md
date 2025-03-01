# Project Structure

## Directories

- **core**: Contains the main orchestrator logic.
- **services**: Contains various services used by the orchestrator.
- **workers**: Contains worker classes for different tasks.
- **data**: Contains local data files used by the knowledge graph service.
- **models**: Contains model definitions and structures.
- **utils**: Contains utility functions and tools.
- **config**: Contains configuration files.
- **tests**: Contains test files and test datasets.

## Files

- **core/orchestrator.ts**: Main orchestrator logic.
- **core/taskManager.ts**: Task queueing and tracking system.
- **core/contextOrchestrator.ts**: Coordinates context flow across services.
- **core/metrics.ts**: Performance and usage metrics collection.
- **services/cacheService.ts**: Cache for storing and retrieving data.
- **services/knowledgeGraphService.ts**: Knowledge graph management and queries.
- **services/contextPreprocessor.ts**: Initial context processing and normalization.
- **services/contextCompression.ts**: Advanced context compression algorithms.
- **services/taskDecomposition.ts**: Task breakdown and optimization.
- **services/semanticAnalyzer.ts**: Analyzes semantic meaning of contexts.
- **services/tokenManager.ts**: Tracks and optimizes token usage.
- **workers/localDataWorker.ts**: Processes local datasets.
- **workers/staticAnalysisWorker.ts**: Performs static code analysis.
- **workers/dependencyCheckerWorker.ts**: Checks dependencies.
- **workers/innovationSuggestionWorker.ts**: Suggests innovative features.
- **workers/compressionWorker.ts**: Handles intensive compression tasks.
- **workers/contextRestorationWorker.ts**: Specializes in context decompression.
- **data/dbpedia_data.json**: Sample DBpedia data.
- **data/conceptnet_data.json**: Sample ConceptNet data.
- **data/compression_patterns.json**: Common patterns for compression.
- **data/task_templates.json**: Templates for common task types.
- **models/compressionModel.ts**: Model definitions for compression.
- **models/taskModel.ts**: Task representation models.
- **models/contextModel.ts**: Context data structures.
- **models/knowledgeNode.ts**: Knowledge graph node definitions.
- **utils/tokenCounter.ts**: Utilities for counting tokens.
- **utils/compressionAlgorithms.ts**: Library of compression techniques.
- **utils/contextMerger.ts**: Tools for merging context segments.
- **utils/dataSerializers.ts**: Data transformation utilities.
- **config/settings.ts**: Core configuration settings.
- **config/compression.json**: Compression configuration.
- **config/orchestration.json**: Orchestration behavior settings.
- **tests/compression.test.ts**: Tests for compression functionality.
- **tests/orchestrator.test.ts**: Tests for orchestration logic.
- **tests/taskDecomposition.test.ts**: Tests for task breakdown.
- **tests/testData/sampleContexts.json**: Sample contexts for testing.
- **tests/testData/complexTasks.json**: Complex task scenarios.
